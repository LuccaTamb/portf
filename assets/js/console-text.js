consoleText(['Lucca Tambellini'], 'console', ['#fff']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var con = document.getElementById(id);
    var target = document.createElement('span');
    con.appendChild(target);
    var letterCount = 0;
    var x = 1;

    function writeText() {
        if (letterCount <= words[0].length) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
            setTimeout(writeText, 100);
        }
    }

    writeText();
}
