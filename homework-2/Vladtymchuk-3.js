function function3(words) {
    const group = {};

    for (const a of words) {
        const word = a.split('').sort().join('');

        if (!group[word]) {
            group[word] = [];
        }

        group[word].push(a);
    }

    const result = Object.values(group);
    return result;
}

const arr = ["tsar", "rat", "tar", "star", "tars", "cheese"];
const result = function3(arr);
console.log(result);