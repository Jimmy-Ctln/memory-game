export function replicateArray(array, number) {
   return array.flatMap((item) => {
    const items = []
    for(let i = 0; i < number; i++) {
        items.push(item)
    }
    return items
})
}

