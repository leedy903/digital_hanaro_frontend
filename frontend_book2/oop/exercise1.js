const assert = require("assert");

// class Emp {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

class Emp {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const createEmpProxy = (emp) => {
    return new Proxy(emp, {
        get(target, prop, receiver) {
            if (prop === "fullName") {
                return `${target.firstName} ${target.lastName.toUpperCase()}`;
            }
            return Reflect.get(target, prop, receiver);
        },

        set(target, prop, value, receiver) {
            if (prop === "fullName") {
                const [firstName, lastName] = value.split(" ");

                if (lastName == null) {
                    target.lastName = firstName;
                } else {
                    target.firstName = firstName;
                    target.lastName = lastName;
                }

                return true;
            }
            return Reflect.set(target, prop, value, receiver);
        },
    });
};

const hong = new Emp();
hongProxy = createEmpProxy(hong);

hong.fullName = "Kildong Hong";
hongProxy.fullName = "Kildong Hong";

console.log(hong.fullName);
console.log(hongProxy.fullName);

assert.strictEqual(hong.fullName, "Kildong HONG");
assert.strictEqual(hongProxy.fullName, "Kildong HONG");

// hongProxy.fullName = "Lee";

// console.log(hong.firstName, hongProxy.lastName);
// console.log(hongProxy.firstName, hongProxy.lastName);

// assert.strictEqual(hongProxy.fullName, "Kildong LEE");
