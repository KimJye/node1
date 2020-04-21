class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }
}

let rectangle = new Rectangle(10, 15);

console.log(rectangle);
console.log(rectangle.area());

/**
 * Rectangle { width: 10, height: 15 }
 * 150
 */