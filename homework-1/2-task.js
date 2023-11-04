function function2(disk, startRod, funcRod, endRod) {
    if (disk === 1) {
        console.log("Переміщуємо диск 1 зі стрижня " + startRod + " на стрижень " + endRod);
        return 1;
    } else {
        const move1 = function2(disk - 1, startRod, endRod, funcRod);
        console.log("Переміщуємо диск " + disk + " зі стрижня " + startRod + " на стрижень " + endRod);

        const move2 = function2(disk - 1, funcRod, startRod, endRod);
        return move1 + 1 + move2;
    }
}

const num = 1;

const moves = function2(num, "A", "B", "C");
console.log("Кількість рухів: " + moves);