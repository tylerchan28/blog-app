const entriesDefaultState = [];
export default (state = entriesDefaultState, action) => {
    switch(action.type) {
        case "ADD_ENTRY":
            return [
                ...state,
                action.entry
            ]
        case "REMOVE_ENTRY":
            return state.filter((id) => id !== action.id)
        
        default:
            return state;
    }
}
