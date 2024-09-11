import type ITimer from './interfaces/ITimer';

export class Timer<T> implements ITimer<T> {
  get excuted() {
    return !!this._excuted;
  }
  protected _excuted?: boolean;
  protected _timer?: number;
  protected _delay?: number;
  protected _callback?: (ctx: T) => void;

  constructor(delay?: number, callback?: (ctx: T) => void) {
    this._delay = delay;
    this._callback = callback;
  }

  start(delay?: number, callback?: (ctx: T) => void): void {}
  clear(): void {}
}
