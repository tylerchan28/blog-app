import database from "../firebase/firebase";

export const addEntry = (entry) => ({
    type: "ADD_ENTRY",
    entry
})

export const startAddEntry = ({ title="", description="", date="" } = entryData ) => {
   return (dispatch, getState) => {
       const uid = getState().auth.uid;
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
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/entries/${id}`).remove().then(() => {
            dispatch(removeEntry(id))
        })

    }
}

export const editEntry = (id, edits) => ({
    type: "EDIT_ENTRY",
    id,
    edits
})

export const startEditEntry = (id, edits) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/entries/${id}`).update(edits).then(() => {
            dispatch(editEntry(id, edits))
        })
    }
}

export const getEntries = (entries) => ({
    type: "GET_ENTRIES",
    entries
})

export const startGetEntries = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/entries`).once("value").then((snapshot) => {
            const entries = [];
            snapshot.forEach((childSnapshot) => {
                entries.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
        dispatch(getEntries(entries));
        })
    }
}