function function6(arr) {
    let perimeter = 0;
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            if (arr[row][col] === 'X') {
                for (const [dx, dy] of dir) {
                    const newRow = row + dx;
                    const newCol = col + dy;

                    if (
                        newRow < 0 || newRow >= arr.length ||
                        newCol < 0 || newCol >= arr[row].length ||
                        arr[newRow][newCol] === 'O'
                    ) {
                        perimeter += 1;
                    }
                }
            }
        }
    }

    return 'Total land perimeter: ' + perimeter;
}
const result = [
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
];
console.log(function6(result));
