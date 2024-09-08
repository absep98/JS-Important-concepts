function MyPromise(executor){
    let state = 'pending';
    let value;
    let handlers = [];
    let catchers = [];
    function resolve(val){
        if(state !== 'pending'){
            return;
        }
        state = 'fulfilled',
        value = val;
        handlers.forEach((handler) => handler(value));
    }
    function reject(val){
        if(state !== 'pending'){
            return;
        }
        state = 'rejected';
        value = val;
        catchers.forEach((catcher) => catcher(value));
    }
    this.then = function(callback){
        return new MyPromise((resolve, reject) => {
            function handle(value){
                try{
                    const result = callback(value);
                    if(result instanceof MyPromise){
                        result.then(resolve).catch(reject);
                    } else {
                        resolve(result);
                    }
                } catch(err){
                    reject(err);
                }
            }
            if(state === 'fulfilled'){
                handle(value);
            } else {
                handlers.push(handle);
            }
        })
    };
    this.catch = function(callback){
        return new Promise((resolve, reject) => {
            function handle(value){
                try{
                    const result = callback(value);
                    if(result instanceof MyPromise){
                        result.then(resolve).catch(reject);
                    } else {
                        resolve(result);
                    }
                } catch(err){
                    reject(err);
                }
            }
            if(state === 'rejected'){
                handle(value);
            } else {
                catchers.push(handle);
            }
        })
    }
    try{
        executor(resolve, reject);
    } catch(err) {
        reject(err);
    }
}

let promise = new MyPromise((resolve, reject) => {
    resolve('success')
});
promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error)
})
