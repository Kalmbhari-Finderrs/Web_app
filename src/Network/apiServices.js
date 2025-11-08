const cache = new Map()

export const fetchData = ( id ) => {
    if (!cache.has(id)) {
        const promise = new Promise(resolve => {
            console.log("Data fetching for id :"+`${id}`)
            setTimeout(() => {
                resolve("Some dtat to show after lag for id :"+`${id}`)
                
            }, 5000)
        })
        cache.set(id,promise)
    }
    return cache.get(id)
}