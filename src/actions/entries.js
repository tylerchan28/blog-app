import database from "../firebase/firebase";

export const addEntry = (entry) => ({
    type: "ADD_ENTRY",
    entry
})

export const startAddEntry = (entryData = {}) => {
   return (dispatch, getState) => {
       const uid = getState().auth.uid;
       const {
           title = "",
           description = "",
           date = ""
       } = entryData;
       const entry = { title, description, date }
       
       return database.ref(`users/${uid}/entries`).push(entry).then((ref) => {
         dispatch(addEntry({
            id: ref.key,
            ...entry
         }))
       })
   }
    

}

export const removeEntry = (id) => ({
    type: "REMOVE_ENTRY",
    id
})

export const startRemoveEntry = (id) => {
    return (dispatch, getState) => {

    }
}

export const editEntry = (id, edits) => ({
    type: "EDIT_ENTRY",
    id,
    edits
})