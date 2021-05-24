import database from "../firebase/firebase";
export const addComment = (comment) => ({
    type: "ADD_COMMENT",
    comment
})

export const startAddComment = (comment, id) => {
    return (dispatch) => {
        return database.ref(`entries/${id}/comments`).set(comment).then(() => {
            dispatch(addComment(comment))
        })
    }
} //`entries/id of post/comments`