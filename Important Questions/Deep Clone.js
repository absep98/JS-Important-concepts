function deepclone(obj, res={}){
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }
    Object.keys(obj).forEach((key) => {
        res[key] = deepclone(obj[key])
    })
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

let ans = deepclone(obj);
ans.d = 'aks'
console.log(ans); // The cloned object should remain unchanged
console.log(obj); // The original object should reflect the change
