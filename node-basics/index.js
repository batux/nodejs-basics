var rect = require('./modules/rectangle');
var rectAsync = require('./modules/rectangle-async');

function solveRect(l,b) {

    console.log('SYNC Rect Operations');

    if(l <= 0 || b <= 0) {
        console.log('l or b can not be zero! l=' + l + ', b=' + b);
    }
    else {
        console.log('The area of rectangle: ' + rect.area(l,b));
        console.log('The perimeter of rectangle: ' + rect.perimeter(l,b));
    }
}

var callbackFunction = (err, value) => {
    if(err) {
        console.log('ERROR: ', err.message)
    }
    else if(value) {
        console.log('The area of rectangle: (x:' + value.l + ', y:' + value.b + ') ' + value.area());
        console.log('The perimeter of rectangle: (x:' + value.l + ', y:' + value.b + ') ' + value.perimeter());
    }
};

function solveRectAsync(l,b) {

    console.log('ASYNC Rect Operations before firing!');

    rectAsync(l,b, callbackFunction);

    console.log('ASYNC Rect Operations are fired, but not completed yet!');
}


solveRect(3,0);
solveRect(17,20);

solveRectAsync(23,20);
solveRectAsync(24,0);
solveRectAsync(26,20);