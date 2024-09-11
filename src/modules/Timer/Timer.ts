import Register from '../Register';
import type ITimer from './interfaces/ITimer';

export class Timer<T> implements ITimer<T> {
  get excuted() {
    return !!this._excuted;
  }
  protected _excuted?: boolean;
  protected _timer?: number;

  protected _register: Register<(ctx: T) => void>;

  constructor(protected _delay?: number, _callback?: (ctx: T) => void) {
    this._register = new Register();
    this._excuted = false;
    if (_callback) this._register.register(_callback);
  }

  start(delay?: number, callback?: (ctx: T) => void): void {
    if (delay != undefined) this._delay = delay;
    if (callback) this._register.register(callback);
  }
  clear(): void {
    this._register.clear();
  }
}
