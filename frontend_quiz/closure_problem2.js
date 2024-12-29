function outerFunc(number) {
    var x = 10;
    x += number;
    var innerFunc = function () {
        var y = 1000000;
        var innerInnerFunc = function () {
            console.log(x + y);
        };
        console.log(x);
        return innerInnerFunc;
    };

    var innerFunc2 = function () {
        console.log(x * 1000);
    };

    if (x < 15) {
        return innerFunc;
    } else {
        return innerFunc2;
    }
}

var inner = outerFunc(1);
var innerInnerFunc = inner(); // 10
innerInnerFunc();
