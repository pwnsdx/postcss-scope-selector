// Stolen from lodash

function isSpace(charCode) {
    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode === 32 || charCode === 160) || charCode === 5760 || charCode === 6158 ||
        (charCode >= 8192 && (charCode <= 8202 || charCode === 8232 || charCode === 8233 || charCode === 8239 || charCode === 8287 || charCode === 12288 || charCode === 65279)));
}

function trimmedLeftIndex(string) {
    var index = -1;
    var length = string.length;

    while (++index < length && isSpace(string.charCodeAt(index))) {}
    return index;
}

module.exports = function trimLeft(string) {
    return string.slice(trimmedLeftIndex(string));
};
