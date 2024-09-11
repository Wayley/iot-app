import { Timer } from './Timer';

export class Interval extends Timer<Interval> {
  constructor(delay?: number, callback?: (ctx: Interval) => void) {
    super(delay, callback);
  }

  start(delay = this._delay, callback?: (ctx: Interval) => void): void {
    this._timer = setInterval(() => {
      if (!this._excuted) this._excuted = true;
      this._callback?.(this);
      callback?.(this);
    }, delay);
  }

  clear(): void {
    this._timer && clearInterval(this._timer);
  }
}
