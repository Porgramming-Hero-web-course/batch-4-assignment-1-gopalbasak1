{
//

type Circle = {
    shape: 'circle';
    radius: number;
}

type Rectangle = {
    shape: 'rectangle',
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

function calculateShapeArea(shape : Shape) : number {
    let mathItem : number;
    if(shape.shape === 'circle'){
         mathItem = Math.PI * shape.radius ** 2
    } else if(shape.shape === 'rectangle'){
       mathItem = shape.width * shape.height;
    } else{
        return 0
    }
   return Math.round(mathItem * 100) / 100;
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
console.log(rectangleArea);







//
}