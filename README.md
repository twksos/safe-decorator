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

