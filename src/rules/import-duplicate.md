# import-duplicate

Auto fix import duplicate

# Rule Details

```js
// bad 👎
import { a, b, a } from 'package'
```

Will be fixed to:

```js
// good 👍
import { a, b } from 'package'
```