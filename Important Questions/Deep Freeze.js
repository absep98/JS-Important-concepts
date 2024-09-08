function deepFreeze(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    Object.keys(obj).forEach((key) => {
        deepFreeze(obj[key]);
    });

    Object.freeze(obj);

    return obj;
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

// Deep freeze the object
let frozenObj = deepFreeze(obj);
try {
    frozenObj.d = 'aks'; // This should throw an error in strict mode or fail silently in non-strict mode
} catch (e) {
    console.error(e);
}
console.log(frozenObj); // The frozen object should remain unchanged
console.log(obj); // The original object should remain unchanged
