function VigenèreCipher(key, abc) {
    const abc_map = {};
    [].map.call(abc, function(a, i) {
        abc_map[a] = i;
    });

    this.encode = function (str) {
        const tempKey = key;
        return [].map.call(str, function(a, i) {
            if (undefined === abc_map[a])
                return a;
            return abc.charAt((abc_map[a] + abc_map[tempKey.charAt(i++ % tempKey.length)]) % abc.length);
        }).join('');
    };
    this.decode = function (str) {
        const tempKey = key;
        return [].map.call(str, function(a, i) {
            if (undefined === abc_map[a])
                return a;
            return abc.charAt((abc.length +  abc_map[a] - abc_map[tempKey.charAt(i++ % tempKey.length)]) % abc.length);
        }).join('');
    };
}


const key = "SECRETKEY";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const cipher = new VigenèreCipher(key, alphabet);

const plaintext = "HELLOWORLD";
const encodedText = cipher.encode(plaintext);
console.log("Вхід: " + encodedText);

const decodedText = cipher.decode(encodedText);
console.log("Вихід: " + decodedText);