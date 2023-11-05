const Vector = function (components) {
    this.components = components;

    this.add = function (other) {
        if (this.components.length !== other.components.length) {
            throw new Error("Vectors must have the same length for addition.");
        }

        const result = [];
        for (let i = 0; i < this.components.length; i++) {
            result.push(this.components[i] + other.components[i]);
        }

        return new Vector(result);
    };

    this.subtract = function (other) {
        if (this.components.length !== other.components.length) {
            throw new Error("Vectors must have the same length for subtraction.");
        }

        const result = [];
        for (let i = 0; i < this.components.length; i++) {
            result.push(this.components[i] - other.components[i]);
        }

        return new Vector(result);
    };

    this.dot = function (other) {
        if (this.components.length !== other.components.length) {
            throw new Error("Vectors must have the same length for dot product.");
        }

        let result = 0;
        for (let i = 0; i < this.components.length; i++) {
            result += this.components[i] * other.components[i];
        }

        return result;
    };

    this.norm = function () {
        const sumOfSquares = this.components.reduce(function (acc, component) {
            return acc + component * component;
        }, 0);
        return Math.sqrt(sumOfSquares);
    };

    this.toString = function () {
        return "(" + this.components.join(",") + ")";
    };

    this.equals = function (other) {
        if (this.components.length !== other.components.length) {
            return false;
        }

        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i] !== other.components[i]) {
                return false;
            }
        }

        return true;
    };
};
console.log("");
const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7]);

console.log(a.add(b).toString());
console.log(a.subtract(b).toString());
console.log(a.dot(b));
console.log(a.norm());
console.log(a.equals(b));
console.log(a.equals(new Vector([1, 2, 3])));
a.add(c);