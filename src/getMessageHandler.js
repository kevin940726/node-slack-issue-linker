const filterMessage = require('./filterMessage');
const buildMessage = require('./buildMessage');
const postMessage = require('./postMessage');

const getMessageHandler = (message) => {
  const matches = filterMessage(message);

  if (matches) {
    const result = buildMessage(matches);

    postMessage(message.channel, result);
  }
};

module.exports = getMessageHandler;
