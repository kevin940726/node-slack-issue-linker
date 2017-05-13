# node-slack-issue-linker
:point_right: Give me the links of issues!

## What ?

Issues Linker will add a bot to your team and listen to your messages by invitation. Once it hears something like `#12`, `repo#12`, or `owner/repo#12`, it will respond by posting back corresponding url of the issues to the channel. In this case it will output the same url `https://github.com/owner/repo/issues/12` in all three patterns.


## Getting Started

There are a few ways to get started, choose one of them ordered by recommendation.

- **One click add to slack and deploy to heroku**:

  [![Add to Slack](https://platform.slack-edge.com/img/add_to_slack.png)](https://slack.com/oauth/authorize?&client_id=3960830011.183110350674&scope=bot,chat:write:bot)

- Setup slack bot yourself and manually deploy to heroku:

  [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/kevin940726/node-slack-issue-linker/tree/master&env[HOST]=github)

- Add to slack and copy tokens to run on your own server after cloning this repo.

## Author

Kai Hao

## License

[MIT](LICENSE)
