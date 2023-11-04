function function2(arr) {
    for (let i = 0; i < arr.length; i++) {
        const left = arr.slice(0, i).reduce((acc, num) => acc + num, 0);
        const right = arr.slice(i + 1).reduce((acc, num) => acc + num, 0);

        if (left === right) {
            return i;
        }
    }
    return -1;
}

const result = [0, 2, 3, 6, 4, 1, 0];
console.log(function2(result));
