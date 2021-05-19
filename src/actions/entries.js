export const addEntry = (entry) => ({
    type: "ADD_EXPENSE",
    entry
})

export const removeEntry = (id) => ({
    type: "REMOVE_EXPENSE",
    id
})