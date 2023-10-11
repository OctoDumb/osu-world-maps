export default class TimeoutLock {
  until: number = 0;

  lock(ms: number) {
    this.until = Date.now() + ms;
  }

  async wait() {
    let now = Date.now();
    if(this.until <= now) {
      return true;
    }
    return new Promise(r => {
      setTimeout(r, this.until - now);
    });
  }
}