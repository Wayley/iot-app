import { Timer } from './Timer';

export class Timeout extends Timer<Timeout> {
  constructor(delay?: number, callback?: (ctx: Timeout) => void) {
    super(delay, callback);
  }

  start(delay = this._delay, callback?: (ctx: Timeout) => void): void {
    this._timer = setTimeout(() => {
      this._excuted = true;
      this._callback?.(this);
      callback?.(this);
    }, delay);
  }

  clear(): void {
    this._timer && clearTimeout(this._timer);
  }
}
