const mockedLoadEnv = jest.fn(() => ({
  HOST: 'github',
  OWNER: 'owner',
  REPO: 'repo',
}));
jest.mock('../loadEnv', () => mockedLoadEnv);

const buildMessage = require('../buildMessage');

it('should give default values', () => {
  const matches = [{ issue: 12 }];

  expect(buildMessage(matches)).toMatchSnapshot();
});

it('should take match values', () => {
  const matches = [{ issue: 12, owner: 'kevin940726', repo: 'node-slack-issue-linker' }];

  expect(buildMessage(matches)).toMatchSnapshot();
});

it('should handle multiple matches', () => {
  const matches = [
    { issue: 12 },
    { issue: 3, repo: 'node-slack-issue-linker' },
    { issue: 6, owner: 'kevin940726', repo: 'node-slack-issue-linker' },
  ];

  expect(buildMessage(matches)).toMatchSnapshot();
});

it('should handle set HOST value', () => {
  mockedLoadEnv.mockImplementationOnce(() => ({
    HOST: 'https://gitlab.com',
  }));
  jest.resetModules();
  const mockedBuildMessage = require('../buildMessage');

  const matches = [{ issue: 12, owner: 'kevin940726', repo: 'node-slack-issue-linker' }];

  expect(mockedBuildMessage(matches)).toMatchSnapshot();
});
