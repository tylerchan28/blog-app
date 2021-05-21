const entriesDefaultState = [];
export default (state = entriesDefaultState, action) => {
    switch(action.type) {
        case "ADD_ENTRY":
            return [
                ...state,
                action.entry
            ]
        case "REMOVE_ENTRY":
            return state.filter((entry) => entry.id !== action.id)
        case "EDIT_ENTRY":
            return state.map((entry) => {
                if (entry.id === action.id) {
                    return {
                        ...entry, 
                        ...action.edits 
                    }     
                } else {
                    return entry
                }
            })
        case "GET_ENTRIES":
            return action.entries
        default:
            return state;
    }
}
