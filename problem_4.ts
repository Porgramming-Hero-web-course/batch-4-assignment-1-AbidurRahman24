{
    type Shape ={ 
        shape: "circle"; 
        radius: number 
    } | { 
        shape: "rectangle"; 
        width: number; 
        height: number 
    };

    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        } else if (shape.shape === "rectangle") {
            return shape.width * shape.height; 
        }
        return 0;
    }

}