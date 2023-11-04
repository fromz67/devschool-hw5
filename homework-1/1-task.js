function function1(num) {
    if (num < 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 3; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

const result = function1(10);
console.log(result);
