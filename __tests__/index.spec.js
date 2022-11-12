import { divide } from '../src/index.ts';

describe('Divide', () => {
  it('should return a repeated string (X) long', () => {
    const output = divide('str');

    expect(output).toEqual('str\n---');
  });

  it('should return a different line of characters when configured', () => {
    const output = divide('str', {
      character: '+',
    });

    expect(output).toEqual('str\n+++');
  });

  it('should return a full pattern of characters', () => {
    const output = divide('str', {
      character: '•–',
    });

    expect(output).toEqual('str\n•–•');
  });

  it('should return a set length of characters, regardless of string size', () => {
    const output = divide('str', { width: 8 });

    expect(output).toEqual('str\n--------');
  });

  it('should return both original string and pad', () => {
    const output = divide('str', { omitSource: true });

    expect(output).toEqual('---');
  });

  it('should return an empty string if nothing passed', () => {
    const output = divide();

    expect(output).toEqual('');
  });

  it('should return no divider if width is negative', () => {
    const output = divide('str', { width: -1 });

    expect(output).toEqual('str');
  });

  it('should accept the config object as the first param', () => {
    const output = divide({ width: 5, character: '@' });

    expect(output).toEqual('@@@@@');
  });
});
