function Person() {
    this.name = "sunny";
    this.showThis = function () {
        console.log(this);
    };
}

let me = new Person();
me.showThis();

var myName = "kwang"; // 함수 바깥에서 선언된 var 변수는 전역객체의 프로퍼티가 됨.

function fn() {
    console.log(this);
    console.log(this.myName);
}

let obj = {
    myName: "sunny",
    func: fn,
};

fn();
obj.func();

let result = "http 요청 응답값";
function sum(result) {
    return result;
}

sum(result);
