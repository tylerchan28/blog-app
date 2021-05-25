const commentDefaultState = [];
export default (state = commentDefaultState, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return [
                ...state,
                action.comment
            ]
        case "REMOVE_COMMENT":
            return state.filter((comment) => comment.id !== action.id)
        case "GET_COMMENTS":
            return action.comments
        default:
            return state
    }
}