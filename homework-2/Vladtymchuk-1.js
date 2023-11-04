function function2(arr, d) {
    let sumArr = [];
    let n = Math.floor(arr.length / d);
    for (let i = 0; i < n; i++) {
        sumArr[i] = 0;
        for (let m = i; m < arr.length; m += n) {
            sumArr[i] += arr[m];
        }
    }
    sumArr.sort((a, b) => b - a);
    return sumArr[0];
}

const arr = [3, 9, 1, 8, 4, 6, 5];
const d = 3;

const result = function2(arr, d);
console.log(result);
