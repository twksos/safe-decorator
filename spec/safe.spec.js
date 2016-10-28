import safe from '../index';

describe("@safe", function () {
    it("decorate method", function () {
        class Subject {
            @safe
            subjectMethod() {
            }
        }
    });
    it("throw error when decorate object", function () {
        expect(function () {
            class Subject {
                @safe
                subjectProperty
            }
        }).toThrow();
    });
    xit("throw error when decorate class", function () {
        expect(function () {
            @safe
            class Subject { }
        }).toThrow();
    });
    it("decorated method should return normally without exception", function () {
        class Subject {
            @safe
            subjectMethod() {
                return 'success'
            }
        }
        const subject = new Subject();
        expect(subject.subjectMethod()).toBe('success');
    });
    it("decorated method should return null with exception", function () {
        class Subject {
            @safe
            subjectMethod() {
                throw new Error('error')
            }
        }
        const subject = new Subject();
        expect(subject.subjectMethod()).toBe(null);
    });
});


describe("@safe()", function () {
    it("decorate method", function () {
        class Subject {
            @safe()
            subjectMethod() {
            }
        }
    });

    it("throw error when decorate object", function () {
        expect(function () {
            class Subject {
                @safe()
                subjectProperty
            }
        }).toThrow();
    });
    it("throw error when decorate class", function () {
        expect(function () {
            @safe()
            class Subject { }
        }).toThrow();
    });
    it("decorated method should return normally without exception", function () {
        class Subject {
            @safe()
            subjectMethod() {
                return 'success'
            }
        }
        const subject = new Subject();
        expect(subject.subjectMethod()).toBe('success');
    });
    it("decorated method should return null with exception", function () {
        class Subject {
            @safe()
            subjectMethod() {
                throw new Error('error')
            }
        }
        const subject = new Subject();
        expect(subject.subjectMethod()).toBe(null);
    });
});

describe("@safe('default value')", function () {
    it("decorate method", function () {
        class Subject {
            @safe('default value')
            subjectMethod() {
            }
        }
    });

    it("throw error when decorate object", function () {
        expect(function () {
            class Subject {
                @safe('default value')
                subjectProperty
            }
        }).toThrow();
    });
    it("throw error when decorate class", function () {
        expect(function () {
            @safe('default value')
            class Subject { }
        }).toThrow();
    });
    it("decorated method should return normally without exception", function () {
        class Subject {
            @safe('default value')
            subjectMethod() {
                return 'success'
            }
        }
        const subject = new Subject();
        expect(subject.subjectMethod()).toBe('success');
    });
    it("decorated method should return default value with exception", function () {
        class Subject {
            @safe('default value')
            subjectMethod() {
                throw new Error('error')
            }
        }
        const subject = new Subject();
        expect(subject.subjectMethod()).toBe('default value');
    });
});