function outerFunc(number) {
    var x = 10;
    x += number;

    var innerFunc = function () {
        console.log(x);
    };

    if (x < 15) {
        return innerFunc;
    } else {
        return x;
    }
}

var inner = outerFunc(155);
inner(); // 10
