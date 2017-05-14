const { WebClient } = require('@slack/client');

const { API_TOKEN } = process.env;

const web = new WebClient(API_TOKEN);

const postMessage = (channel, result) => {
  web.chat.postMessage(channel, result, {
    parse: 'none',
    unfurl_links: true,
  });
};

module.exports = postMessage;
