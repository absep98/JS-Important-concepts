function deepFreeze(obj, res = {}, freeze = false) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    Object.keys(obj).forEach((key) => {
        res[key] = deepFreeze(obj[key], {}, freeze);
    });

    if (freeze) {
        Object.freeze(res);
    }

    return res;
}

const obj = {
    a: 1,
    b: {
        b1: 1,
        b2: 2,
        b3: 3
    },
    c: 4,
    d: {
        'name': 'abhi'
    }
};

// Deep clone without freezing
let ans = deepFreeze(obj);
ans.d = 'aks';
console.log(ans); // The cloned object should reflect the change
console.log(obj); // The original object should remain unchanged

// Deep clone with freezing
let frozenAns = deepFreeze(obj, {}, true);
try {
    frozenAns.d = 'aks'; // This should throw an error in strict mode or fail silently in non-strict mode
} catch (e) {
    console.error(e);
}
console.log(frozenAns); // The cloned object should remain unchanged
console.log(obj); // The original object should remain unchanged
