# if-newline

Enforce line breaks between `if` statements and their consequent / alternate expressions. Only applicable for inline `if` statements.

# Rule Details

```js
// bad 👎
if (a) func()
```

Will be fixed to:

```js
// good 👍
if (a) 
  func()
```