import database from "../firebase/firebase";
export const addComment = (comment) => ({
    type: "ADD_COMMENT",
    comment
})

export const startAddComment = (comment) => {
    return (dispatch) => {
        return database.ref(`entries/${comment.postId}/comments`).push(comment.commentId).then(() => {
            return database.ref(`comments`).push(comment).then(() => {
                dispatch(addComment(comment))
            })
        })
    }
}

export const removeComment = (id) => ({
    type: "REMOVE_ENTRY",
    id
})

export const getComments = (comments) => ({
    type: "GET_COMMENTS",
    comments
})

export const startGetComments = () => {
    return (dispatch) => {
        return database.ref(`comments`).once("value").then((snapshot) => {
            const comments = [];
            snapshot.forEach((childSnapshot) => {
                comments.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
        dispatch(getComments(comments))
        })  
    }
}
