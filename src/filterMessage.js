const issueRegex = /(?:([^\s/]+)\/)?([^\s/]+)?#(\d+)/gi;

const recursiveFind = (msg, results) => {
  const group = issueRegex.exec(msg);

  if (group && group[3]) {
    const [, owner, repo, issue] = group;

    return recursiveFind(msg, [
      ...results,
      {
        owner,
        repo,
        issue,
      },
    ]);
  }

  return results;
};

const filterMessage = (message) => {
  const { text, subtype } = message;

  // no issue found or messages sent by bot
  if ((text && text.indexOf('#') < 0) || subtype === 'bot_message') {
    return null;
  }

  issueRegex.lastIndex = 0;
  const results = recursiveFind(text, []);

  return results.length ? results : null;
};

module.exports = filterMessage;
