const entriesDefaultState = [];
export default (state = entriesDefaultState, action) => {
    switch(action.type) {
        case "ADD_POST":
            return [
                ...state,
                action.entry
            ]
        case "REMOVE_POST":
            return state.filter((id) => id !== action.id)
        
        default:
            return state;
    }
}
