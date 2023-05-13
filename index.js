function generate() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var words = input.textContent.split(" ");

    var result = "";

    for (var i = 0; i < words.length; i++) {
        length = Math.floor(words[i].length / 2);
        count = 0;

        for (var j = 0; j < words[i].length; j++) {
            if (count < length) {
                result += words[i][j].bold();
                count += 1;
            }
            else {
                result += words[i][j];
            }
        }

        result += " ";
    }

    output.innerHTML = result;
}

function changeTheme() {
    var body = document.body;
    body.classList.toggle("theme-light");
    body.classList.toggle("theme-dark");
}
