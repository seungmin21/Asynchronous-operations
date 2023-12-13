let promise = new Promise(function(resolve, reject) {
  resolve("끝");
});

// 객체 출력
console.log(promise)

// P(대문자)romise.race(객체 혹은 배열)
// then을 써서 응답 결과 출력 그리고 catch로 오류 출력
Promise.race([promise]).then(function(resolveData) {
  console.log(resolveData);
}).catch( err => {
  console.error(err);
})


