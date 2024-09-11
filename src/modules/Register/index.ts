export class Register<T extends Function> {
  #registers: T[];
  constructor() {
    this.#registers = [];
  }
  register(t: T) {
    const i = this.#registers.findIndex((o) => o == t);
    if (i == -1) this.#registers.push(t);
  }

  unregister(t: T) {
    const i = this.#registers.findIndex((o) => o == t);
    if (i > -1) this.#registers.splice(i, 1);
  }

  excute() {
    this.#registers.forEach((t) => t());
  }

  clear() {
    this.#registers = [];
  }
}

export default Register;
