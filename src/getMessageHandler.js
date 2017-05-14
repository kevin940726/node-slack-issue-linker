const filterMessage = require('./filterMessage');
const postMessage = require('./postMessage');

const {
  OWNER,
  REPO,
  HOST,
} = process.env;

const BASE_URL = HOST === 'github' ? 'https://github.com' : HOST;

const getMessageHandler = (message) => {
  const matches = filterMessage(message);

  if (matches) {
    const results = matches
      .map((match) => {
        const owner = match.owner || OWNER;
        const repo = match.repo || REPO;
        const issue = match.issue;

        const url = `${BASE_URL}/${owner}/${repo}/issues/${issue}`;
        const label = `${owner === OWNER ? '' : `${owner}/`}${repo}#${issue}`;

        return `<${url}|${label}> :point_right: _${url}_`;
      });

    postMessage(message.channel, results.join('\n'));
  }
};

module.exports = getMessageHandler;
