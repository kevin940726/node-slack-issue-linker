const { RtmClient, RTM_EVENTS } = require('@slack/client');
const getMessageHandler = require('./getMessageHandler');
const { BOT_TOKEN } = require('./loadEnv')();

const rtm = new RtmClient(BOT_TOKEN);

rtm.on(RTM_EVENTS.MESSAGE, getMessageHandler);

rtm.start();
