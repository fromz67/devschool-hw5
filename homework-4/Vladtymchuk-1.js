function VigenèreCipher(key, abc) {
    var abc_map = {};
    [].map.call(abc, function(a, i) {
        abc_map[a] = i;
    });

    this.encode = function (str) {
        var tempKey = key;
        return [].map.call(str, function(a, i) {
            if (undefined === abc_map[a])
                return a;
            return abc.charAt((abc_map[a] + abc_map[tempKey.charAt(i++ % tempKey.length)]) % abc.length);
        }).join('');
    };
    this.decode = function (str) {
        var tempKey = key;
        return [].map.call(str, function(a, i) {
            if (undefined === abc_map[a])
                return a;
            return abc.charAt((abc.length +  abc_map[a] - abc_map[tempKey.charAt(i++ % tempKey.length)]) % abc.length);
        }).join('');
    };
}


var key = "SECRETKEY";
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var cipher = new VigenèreCipher(key, alphabet);

var plaintext = "HELLOWORLD";
var encodedText = cipher.encode(plaintext);
console.log("Вхід: " + encodedText);

var decodedText = cipher.decode(encodedText);
console.log("Вихід: " + decodedText);