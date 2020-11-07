const moudle = () => {

    let posts = [];
    let postId = 0;
    let commentId = 0;

    const addPost = (post) => {
        posts.push({
            id: postId,
            content: post,
            comments: [

            ]
        });
        postId++;
        return postId - 1
    }


    const removeAPost = (id) => {
        for (let i in posts) {
            if (parseInt(posts[i].id) === id) {
                posts.splice(i, 1)
                break;
            }
        }
    }

    const addComment = (postID, comment) => {
        for (let i in posts) {
            if (parseInt(posts[i].id) === postID) {
                posts[i].comments.push({ id: commentId, comment: comment })
                commentId++;
                break;
            }
        }
    }

    const removeComment = (postId, commentId) => {

        for (let i of posts) {
            if (parseInt(i.id) === postId) {
                for (let j in i.comments){
                    if (commentId === parseInt(i.comments[j].id)) {
                        i.comments.splice(j, 1)
                        break;
                    }
                }
                break;
            } 

        }
    }

    const getUpdatedPosts = () => posts

    return {
        addPost,
        removeAPost,
        addComment,
        removeComment,
        getUpdatedPosts
    }
}



















