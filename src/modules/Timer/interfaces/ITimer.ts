export interface ITimer<T> {
  get excuted(): boolean;
  start(delay?: number, callback?: (ctx: T) => void): void;
  clear(): void;
}

export default ITimer;
