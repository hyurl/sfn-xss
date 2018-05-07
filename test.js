var assert = require("assert");
var xss = require("./");

var html = "<script>document.write('You are being hacked.')</script>";
assert.equal(xss.escapeTags(html), "&lt;script&gt;document.write('You are being hacked.')&lt;/script&gt;");

var html2 = "<a href=\"javascript:document.write('You are being hacked.');\">";
assert.equal(xss.escapeScriptHrefs(html2), "<a data-href=\"javascript:document.write('You are being hacked.');\">");

var html3 = `<button onclick="document.write('You are being hacked.')">`;
assert.equal(xss.escapeEventAttributes(html3), "<button data-onclick=\"document.write('You are being hacked.')\">");

console.log("All tests passed!");