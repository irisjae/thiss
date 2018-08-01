# thiss

Use `this` the way they use the Y combinator *(you want arrow functions that need to use `this`?)*

## Brief API
```
var thiss = require ('thiss')

var node = {
  ...,
  attach_data: thiss (self => data => {
    ;self .data = data
  })
}

;node .attach_data ('x')
;console .log (node .data)
// x
```

## (tbc)
