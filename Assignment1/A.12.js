function myPromise() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve("Success")
            reject("Failed")   
        }, 3000)
        
    })
}

myPromise()
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err) {
        console.log(err)
    })