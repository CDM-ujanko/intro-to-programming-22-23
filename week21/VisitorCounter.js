module.exports = class VisitorCounter {
  #count;
  constructor() {
    this.#count = 0;
  }

  getCount() {
    return this.#count;
  }

  addOne() {
    this.#count++;
  }
}
