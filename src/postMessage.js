const { WebClient } = require('@slack/client');

const { API_TOKEN } = process.env;

const web = new WebClient(API_TOKEN);

const postMessage = (channel, message) => {
  web.chat.postMessage(channel, message, {
    parse: 'none',
    unfurl_links: true,
  });
};

module.exports = postMessage;
