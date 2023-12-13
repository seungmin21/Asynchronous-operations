try {
  new Promise((resolve, reject) => {
    resolve("hello world");
  });
} catch ({error, err}) {
  console.error(err);
}
