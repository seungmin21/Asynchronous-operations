async function f() {
  let promise = new Promise((resolve, reject) => {
    resolve("Hello world")
  });
  let result = await promise;
  console.log(result)
}
f()

