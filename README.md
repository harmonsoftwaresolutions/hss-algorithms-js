# hss-algorithms-js
Examples of using algorithms / Abstract Data Types in javascript. Prefers ES6/ES7 styles where possible.


## Running the tests
`yarn run ava:watch`

## Stacks
Arrays in javascript are dynamic - no isFull() function is necessary.

Simple stack example using ES6 classes. Place the functions inside the constructor to access the privately scoped array.

`lib/stack.js`
```
class Stack {
  constructor() {
    // use scope for private property
    const array = [];

    this.push = item => array.push(item);

    // etc ...
  }
}

```
