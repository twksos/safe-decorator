function decorator(defaultValue = null) {
    return function (target, key, descriptor) {
        const value = descriptor.value;
        if (typeof value !== 'function') throw '@safe can only decorate function';
        descriptor.value = function () {
            try {
                return value.apply(this, arguments);
            } catch (e) {
                return defaultValue;
            }
        };
        return descriptor;
    }
}

export function safe(target, key, descriptor) {
    if (arguments.length === 3) return decorator()(target, key, descriptor);
    if (arguments.length === 1) return decorator(target);
    if (arguments.length === 0) return decorator();
    throw `@safe does not take ${arguments.length} arguments. use @safe, @safe() or @safe(defaultValue)`;
}