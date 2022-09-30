function sucess() {
  console.log("sucess");
}


const promise = Promise.resolve(123);
promise.then((res) => {
    console.log("Promise sucess inside" );
    //sucess();
});

const promise_reject = Promise.reject();
promise_reject.catch((res) => {
    console.log("Promise reject inside" );
});