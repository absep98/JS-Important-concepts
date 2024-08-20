function flatten(obj, finalkey = "", res = {}) {
    if (typeof(obj) !== 'object' || obj === null || obj instanceof Date) {
        if (finalkey) {
            res[finalkey] = obj;
        } else {
            return obj;
        }
        return res;
    } 

    Object.keys(obj).forEach((key) => {
        let newkey = finalkey ? `${finalkey}.${key}` : key;
        flatten(obj[key], newkey, res);
    });
        
    return res;
}

let dateObj;

console.log(flatten(dateObj));
