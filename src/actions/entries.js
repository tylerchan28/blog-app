export const addEntry = (entry) => ({
    type: "ADD_ENTRY",
    entry
})

// export const removeEntry = ({ id }) => ({
//     type: "REMOVE_ENTRY",
//     id
// })

export const removeEntry = (id) => ({
    type: "REMOVE_ENTRY",
    id
})

export const editEntry = (id, edits) => ({
    type: "EDIT_ENTRY",
    id,
    edits
})