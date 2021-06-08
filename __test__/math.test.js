const  area = require('../src/math');

describe('Calculate area of shapes', () => {
    it('should calculate area of triangle',  () => {
        let triangle = [5, 10];
        let triangleArea = area(triangle);
        expect(triangleArea).toEqual(50);
        
        
    });
    it("should calculate area of rectangle",  () => {
        let rectangle = [6, 7];
        let rectangleArea = area(rectangle);
        expect(rectangleArea).toEqual(42);
    });
})

