module.exports = (x,y,callback) => {

    if(x <= 0 || y <= 0) {
        setTimeout(() => callback(new Error('Invalid params x=' + x + ', y=' + y), null), 2000);
    }
    else {

        var callbackValue = {
            perimeter: () => (2*(x + y)),
            area: () => (x*y),
            l: x,
            b: y
        };

        setTimeout(() => callback(null, callbackValue), 2000);
    }
}