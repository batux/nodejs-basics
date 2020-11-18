var rect = {
    perimeter: (x,y) => (2*(x + y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b) {

    if(l <= 0 || b <= 0) {
        console.log("l or b can not be zero! l=" + l + ", b=" + b);
    }
    else {
        console.log("The area of rectangle: " + rect.area(l,b));
        console.log("The perimeter of rectangle: " + rect.perimeter(l,b));
    }
}

solveRect(3,4);
solveRect(6,2);
solveRect(10,1);
solveRect(17,20);