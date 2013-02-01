# ordered

[![build status][1]][2] [![dependency status][3]][4]

[![browser support][5]][6]

Insert DOM elements into a container in order

## Example

```js
var ordered = require("ordered")

var insert = ordered(containerElem)

insert("someKey", someElem)
insert("someOtherKey", someElem)
insert(data.sortKey, Widget(data))
```

The elements will be inserted into the `containerElem` in order
    of the key you pass as first argument

## Installation

`npm install ordered`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Colingo/ordered.png
  [2]: http://travis-ci.org/Colingo/ordered
  [3]: http://david-dm.org/Colingo/ordered/status.png
  [4]: http://david-dm.org/Colingo/ordered
  [5]: http://ci.testling.com/Colingo/ordered.png
  [6]: http://ci.testling.com/Colingo/ordered
