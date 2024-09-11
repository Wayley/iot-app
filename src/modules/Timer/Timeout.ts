import { Timer } from './Timer';

export class Timeout extends Timer<Timeout> {
  constructor(delay?: number, callback?: (ctx: Timeout) => void) {
    super(delay, callback);
  }

  start(delay?: number, callback?: (ctx: Timeout) => void): void {
    super.start(delay, callback);
    this._timer = setTimeout(() => {
      this._excuted = true;
      this._register.excute();
    }, this._delay);
  }

  clear(): void {
    super.clear();
    this._timer && clearTimeout(this._timer);
  }
}
