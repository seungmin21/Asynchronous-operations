let promise = new Promise(function(resolve, reject) {
  resolve("끝");
});

// 객체 출력
console.log(promise)


// then을 써서 응답 결과 출력 그리고 catch로 오류 출력
promise.then(function(resolveData) {
  console.log(resolveData);
}).catch( err => {
  console.error(err);
} )