(function () {
    var t = 2;
    for (var i = 0; i < t; i++) {
        var a = parseInt(prompt("a"));
        var b = parseInt(prompt("a"));
        var n = parseInt(prompt("a"));
        var c = a;
        for (var j = 0; j < n; j++) {
            c += (Math.pow(2, j) * b);
            document.write(" " + c + " ");
        }
        document.write("<br>");
    }
}
());
//2 0 2 10 5 3 5
