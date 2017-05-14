const filterMessage = require('../filterMessage');

it('should return null when no text is found', () => {
  const message = {};

  expect(filterMessage(message)).toBe(null);
});

it('should return null when no issue pattern is found', () => {
  const message = {
    text: 'simple message',
  };

  expect(filterMessage(message)).toBe(null);
});

it('should return null when message is sent by bot', () => {
  const message = {
    text: 'simple message #12',
    subtype: 'bot_message',
  };

  expect(filterMessage(message)).toBe(null);
});

it('should return correctly with pattern #{num}', () => {
  const message = {
    text: 'simple message #12',
  };

  expect(filterMessage(message)).toEqual([{ issue: '12' }]);
});

it('should return correctly with multiple pattern #{num}', () => {
  const message = {
    text: '#99 simple message #12, #1',
  };

  expect(filterMessage(message)).toEqual([
    { issue: '99' },
    { issue: '12' },
    { issue: '1' },
  ]);
});

it('should return correctly with pattern {repo}#{num}', () => {
  const message = {
    text: 'simple message repo#12',
  };

  expect(filterMessage(message)).toEqual([{ issue: '12', repo: 'repo' }]);
});

it('should return correctly with multiple pattern {repo}#{num}', () => {
  const message = {
    text: 'some_repo#99 simple message some-repo#12, #1',
  };

  expect(filterMessage(message)).toEqual([
    { issue: '99', repo: 'some_repo' },
    { issue: '12', repo: 'some-repo' },
    { issue: '1' },
  ]);
});

it('should return correctly with pattern {owner}/{repo}#{num}', () => {
  const message = {
    text: 'simple message owner/repo#12',
  };

  expect(filterMessage(message)).toEqual([{ issue: '12', repo: 'repo', owner: 'owner' }]);
});

it('should return correctly with multiple pattern {owner}/{repo}#{num}', () => {
  const message = {
    text: 'some-owner/some_repo#99 simple message some-repo#12, #1  some_owner/repo2#5',
  };

  expect(filterMessage(message)).toEqual([
    { issue: '99', repo: 'some_repo', owner: 'some-owner' },
    { issue: '12', repo: 'some-repo' },
    { issue: '1' },
    { issue: '5', repo: 'repo2', owner: 'some_owner' },
  ]);
});
