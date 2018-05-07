function isArray(obj) {
    return Object.prototype.toString.apply(obj).slice(8, -1) == "Array";
}

/** 
 * Escapes HTML tags.
 * @param {string} html HTML contents.
 * @param {string | string[]} tags Escape specified tags, default is 
 *  `<script><style><iframe><object><embed>`.
 * @returns {string} Escaped HTML contents.
 */
function escapeTags(html, tags) {
    tags = tags || "<script><style><iframe><object><embed>";
    tags = isArray(tags) ? tags : tags.match(/[a-zA-Z0-9\-:]+/g);

    for (let i in tags) {
        let tag = tags[i],
            re1 = new RegExp("<" + tag + "\\s*>", "gi"),
            re2 = new RegExp("<\\/" + tag + "\\s*>", "gi"),
            re3 = new RegExp("<" + tag + "(.*)>", "gi");

        html = html.replace(re1, "&lt;" + tag + "&gt;")
            .replace(re2, "&lt;/" + tag + "&gt;")
            .replace(re3, match => {
                return "&lt;" + match.substring(1, match.length - 1) + "&gt;";
            });
    }

    return html;
}

/** 
 * Escapes JavaScript hrefs.
 * @param {string} html
 * @returns {string}
 */
function escapeScriptHrefs(html) {
    return html.replace(/\shref\s*=["'\s]*\w+script:/gi, match => {
        return match.replace("href", "data-href");
    });
}

/**
 * Escapes event attributes.
 * @param {string} html
 * @returns {string}
 */
function escapeEventAttributes(html) {
    return html.replace(/\son[a-z]+\s*=/gi, match => {
        return " data-" + match.substring(1);
    });
}

module.exports = {
    escapeTags,
    escapeScriptHrefs,
    escapeEventAttributes
}