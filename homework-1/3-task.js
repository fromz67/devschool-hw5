function function3(m) {
    let n = 1;
    let sum = 0;
    while (sum < m) {
        sum += n*n*n;
        if (sum === m) {
            return n;
        }
        n++;
    }
    return -1;
}
console.log(function3(784));
console.log(function3(43789));