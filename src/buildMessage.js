const {
  OWNER,
  REPO,
  HOST,
} = require('./loadEnv')();

const BASE_URL = HOST === 'github' ? 'https://github.com' : HOST;

const buildMessage = matches => (
  matches
    .map((match) => {
      const owner = match.owner || OWNER;
      const repo = match.repo || REPO;
      const issue = match.issue;

      const url = `${BASE_URL}/${owner}/${repo}/issues/${issue}`;
      const label = `${owner === OWNER ? '' : `${owner}/`}${repo}#${issue}`;

      return `<${url}|${label}> :point_right: _${url}_`;
    })
    .join('\n')
);

module.exports = buildMessage;
