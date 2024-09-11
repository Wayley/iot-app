import { Timer } from './Timer';

export class Interval extends Timer<Interval> {
  constructor(delay?: number, callback?: (ctx: Interval) => void) {
    super(delay, callback);
  }

  start(delay?: number, callback?: (ctx: Interval) => void): void {
    super.start(delay, callback);
    this._timer = setInterval(() => {
      if (!this._excuted) this._excuted = true;
      this._register.excute();
    }, delay);
  }

  clear(): void {
    super.clear();
    this._timer && clearInterval(this._timer);
  }
}
