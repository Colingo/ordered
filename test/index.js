var test = require("tape")
var document = require("global/document")

var Ordered = require("../index")

test("inserts things in order", function (assert) {
    var container = elem()

    var one = elem("one")
    var two = elem("two")
    var three = elem("three")
    var four = elem("four")

    var insert = Ordered(container)
    insert("4", { view: four })
    insert("2", two)
    insert("3", three)
    insert("1", one)

    console.log("childNOdes", container.childNodes)
    assert.equal(container.childNodes.length, 4)

    assert.equal(container.children[0].textContent, "one")
    assert.equal(container.children[1].textContent, "two")
    assert.equal(container.children[2].textContent, "three")
    assert.equal(container.children[3].textContent, "four")

    assert.end()
})

function elem(text) {
    var div = document.createElement("div")
    if (text) {
        div.textContent = text
    }
    return div
}
