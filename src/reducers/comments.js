const commentDefaultState = [];
export default (state = commentDefaultState, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return [
                ...state,
                action.comment
            ]
        default:
            return state
    }
}