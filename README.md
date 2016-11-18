[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c2b0664124984d4397303aaacd5302f2)](https://www.codacy.com/app/twksos/safe-decorator?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=twksos/safe-decorator&amp;utm_campaign=Badge_Grade)

[![Build Status](https://travis-ci.org/twksos/safe-decorator.svg?branch=master)](https://travis-ci.org/twksos/safe-decorator)

# safe-decorator
decorator function to catch and return default value

##usage

###`@safe` or `@safe()`
method with `@safe` or `@safe()` will return null when exception thrown. 

```javascript
import safe from 'safe-decorator';

class Subject {
    @safe
    subjectMethod() {
        throw new Error('error');
    }
}

const subject = new Subject();
expect(subject.subjectMethod()).toBe(null);
```

###`@safe(defaultValue)`
method with `@safe(defaultValue)` return `defaultValue` when exception thrown. 

```javascript
import safe from 'safe-decorator';

class Subject {
    @safe('default value')
    subjectMethod() {
        throw new Error('error');
    }
}

const subject = new Subject();
expect(subject.subjectMethod()).toBe('default value');
```

