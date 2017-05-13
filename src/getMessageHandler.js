const { WebClient } = require('@slack/client');
const filterMessage = require('./filterMessage');

const {
  API_TOKEN,
  OWNER,
  REPO,
  HOST,
} = process.env;

const web = new WebClient(API_TOKEN);
const BASE_URL = HOST === 'github' ? 'https://github.com' : HOST;

const getMessageHandler = (message) => {
  const matches = filterMessage(message);

  if (matches) {
    const attachments = matches
      .map((match) => {
        const owner = match.owner || OWNER;
        const repo = match.repo || REPO;
        const issue = match.issue;

        const url = `${BASE_URL}/${owner}/${repo}/issues/${issue}`;
        const label = `${owner === OWNER ? '' : `${owner}/`}${repo}#${issue}`;

        return `<${url}|${label}> :point_right: _${url}_`;
      });

    web.chat.postMessage(message.channel, attachments.join('\n'), {
      parse: 'none',
      unfurl_links: true,
    });
  }
};

module.exports = getMessageHandler;
