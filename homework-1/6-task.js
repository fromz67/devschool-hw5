function function6(num) {
    const num1 = num.toString().split('');

    for (let i = 0; i < num1.length - 1; i++) {
        for (let j = 0; j < num1.length - i - 1; j++) {
            if (num1[j] < num1[j + 1]) {
                const temp = num1[j];
                num1[j] = num1[j + 1];
                num1[j + 1] = temp;
            }
        }
    }

    const result = num1.join('');

    return parseInt(result, 10);
}

console.log(function6(25649));
