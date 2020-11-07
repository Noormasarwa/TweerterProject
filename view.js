const view = () => {

    
    const render = (posts) => {
        let postContainer;
        let commentContainer;
        $(`#posts`).empty()
        for(let post of posts){
            postContainer = `<div class = "post-container" id = "post-${post.id}" data-id = ${post.id}><div class="thepost">${post.content}</div>
            <div class="commentContainer"></div>
            <div class="replyContainer">
                <input type="text" name="inputText" class="commentText" placeholder ="Got a something to say?">
                <button class ="commentBtn">Comment</button>
                <button class ="deleteBtn">delete Post</button>
            </div>
        </div>`;
            $("#posts").append(postContainer);
            commentContainer = $(`#post-${post.id}`).find(".commentContainer")
            for(let comment of post.comments){
                commentContainer.append(`<li class ="comment-${comment.id}" data-id = ${comment.id}><span class ="X fas fa-trash">  </span><span>${comment.comment}</span></li>`)
            }
        }
    }
          
    
    return { render }
}





