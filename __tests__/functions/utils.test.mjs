import { afterAll, beforeAll, describe, jest, it, expect } from '@jest/globals';
import chalk from 'chalk';
import { log } from '../../src/functions/utils.mjs';

describe('log function', () => {
  let mockLog;
  let mockError;
  let mockWarn;

  beforeAll(() => {
    mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});
    mockError = jest.spyOn(console, 'error').mockImplementation(() => {});
    mockWarn = jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterAll(() => {
    mockLog.mockRestore();
    mockError.mockRestore();
    mockWarn.mockRestore();
  });

  it('logs with info style', () => {
    const message = 'Info message';
    log(message, 'info');
    expect(mockLog).toHaveBeenCalledWith(chalk.blue('[INFO]') + ' ' + message);
  });

  it('logs with err style', () => {
    const message = 'Error message';
    log(message, 'err');
    expect(mockError).toHaveBeenCalledWith(
      chalk.red('[ERROR]') + ' ' + message
    );
  });

  it('logs with warn style', () => {
    const message = 'Warning message';
    log(message, 'warn');
    expect(mockWarn).toHaveBeenCalledWith(
      chalk.yellow('[WARNING]') + ' ' + message
    );
  });

  it('logs with done style', () => {
    const message = 'Success message';
    log(message, 'done');
    expect(mockLog).toHaveBeenCalledWith(
      chalk.green('[SUCCESS]') + ' ' + message
    );
  });

  it('logs with unknown style', () => {
    const message = 'Unknown message';
    log(message, 'unknown');
    expect(mockLog).toHaveBeenCalledWith(message);
  });
});