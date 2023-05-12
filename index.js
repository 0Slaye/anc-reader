function generate() {
    input = document.getElementById("input");
    output = document.getElementById("output");
    words = input.value.split(" ");

    var result = "";

    for (var i = 0; i < words.length; i++) {
        length = Math.floor(words[i].length / 2);
        count = 0;

        for (var j = 0; j < words[i].length; j++) {
            if (count < length) {
                result += words[i][j].toUpperCase();
                count += 1;
            }
            else {
                result += words[i][j];
            }
        }

        result += " ";
    }

    output.value = result;
}