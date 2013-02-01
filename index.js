var append = require("insert/append")
var before = require("insert/before")

module.exports = Ordered

function Ordered(parent) {
    var hash = {}

    return function insert(key, elem) {
        var keys = Object.keys(hash).sort()
        var after = keys.filter(function (other) {
            return other > key
        })[0]
        var target = hash[after] || null

        hash[key] = elem

        if (target === null) {
            return append(parent, elem)
        } else {
            return before(target, elem)
        }
    }
}
