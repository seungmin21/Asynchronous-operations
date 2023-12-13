class add {
  async wait() {
    return await Promise.resolve('class 작성법');
  }
}

new add()
  .wait()
  .then()