function area(shape) {
    let area = 1;
    for (let i = 0; i < shape.length; i++){
        area = area * shape[i];
    }
    return area;
}

let triangle = [3, 5]
let rectangle = [2, 9]

let triangleArea = area(triangle);
let rectangleArea = area(rectangle);

module.exports = area;

