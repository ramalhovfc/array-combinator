# array-combinator
Generate combinations of array elements.
Given an array of array of elements generates combinations of each element of each array.

# Install
Install as an NPM package
```javascript
npm i array-combinator --save
```

# Usage
```javascript
const combinator = require("array-combinator");

combinator( [[1, 2], ['a', 'b', 'c']] );
// outputs
/*
[
  [ 1, 'a' ],
  [ 2, 'a' ],
  [ 1, 'b' ],
  [ 2, 'b' ],
  [ 1, 'c' ],
  [ 2, 'c' ]
]
*/
```

# Tests
Run `npm test`