function outerFunc() {
    var x = 10;
    var innerFunc = function () {
        console.log(x);
    };
    return innerFunc;
}

class Cls {
    #x = 10;
    constructor() {}
    fun() {
        console.log(this.#x);
    }
}

var inner = outerFunc();
inner(); // 10

const cls = new Cls();
cls.fun();
