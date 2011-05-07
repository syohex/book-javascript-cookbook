var charSets = new Array("ab", "bb", "cd", "ab", "cc", "ab", "dd", "ab");

function replaceElement(element, index, array) {
    if (element == "ab") {
        array[index] = "**";
    }
}

charSets.forEach(replaceElement);
print(charSets);

Array.prototype.myforEach = function (fun) {
    var len = this.length >>> 0;

    if (typeof fun != "function") {
        throw new TypeError();
    }

    var thisp = arguments[1];

    for (var i = 0; i < len; i++) {
        if (i in this)
            fun.call(thisp, this[i], i, this);
    }

}

charSets.myforEach(function (element, index, array) {
    array[index] = "#" + element + "+";
});

print(charSets);
