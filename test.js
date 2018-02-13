const {
    escapeTags,
    escapeScriptHrefs,
    escapeEventAttributes
} = require("./");

var html = "<script>document.write('You are being hacked.')</script>";
var escaped = escapeTags(html);

console.log(escaped);
// &lt;script&gt;document.write('You are being hacked.')&lt;/script&gt;

var html2 = `<a href="javascript:document.write('You are being hacked.');">`;
var escaped2 = escapeScriptHrefs(html2);

console.log(escaped2);
// <a data-href="jscript:document.write('You are being hacked.');">

var html3 = `<button onclick="document.write('You are being hacked.')">`;
var escaped3 = escapeEventAttributes(html3);

console.log(escaped3);
// <button data-onclick="document.write('You are being hacked.')">