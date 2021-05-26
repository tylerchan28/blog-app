import database from "../firebase/firebase";
export const addComment = (comment) => ({
    type: "ADD_COMMENT",
    comment
})

export const startAddComment = ({ content="", date="", userName="", postId="", commentId="", uid="" } = commentData) => {
    return (dispatch) => {
        const comment = { content, date, userName, postId, commentId, uid }
        return database.ref(`entries/${comment.postId}/comments`).push(comment.commentId).then(() => {
            return database.ref(`comments`).push(comment).then((ref) => {
                dispatch(addComment({
                    ...comment,
                    id: ref.key
                }))
            })
        })
    }
}

export const removeComment = (id) => ({
    type: "REMOVE_COMMENT",
    id
})

export const startRemoveComment = (id) => {
    return (dispatch) => {
        return database.ref(`comments/${id}`).remove().then(() => {
            dispatch(removeComment(id))
        })
    }
}

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


