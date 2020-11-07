const Controller = () => {
    const vie = view()
    const mod = moudle()

    const addPost = (postText) => {
        mod.addPost(postText)
        vie.render(mod.getUpdatedPosts())
    }

    const addComment = (postId, comment) => {
        mod.addComment(postId, comment)
        vie.render(mod.getUpdatedPosts())
    }

    const removePost = (postId) => {
        mod.removeAPost(postId)
        vie.render(mod.getUpdatedPosts())
    }

    const removecomment = (postId, commentId) => {
        mod.removeComment(postId, commentId)
        vie.render(mod.getUpdatedPosts())
    }


    return {
        addPost,
        addComment,
        removePost,
        removecomment
    }

}

    const controller = Controller()
    $(`#twit`).on(`click`,function(){
    
        if(!$(`#text`).val())
            return
        controller.addPost($(`#text`).val())
        $(`#text`).val("")
    });
    
    
    $(`#posts`).on(`click`,`.commentBtn`,function(){
        let text = $(this).closest('div').find(".commentText")
        if(!text.val()){
            return
        }
        let postcontainer = $(this).closest('.post-container')
        controller.addComment(postcontainer.data().id,text.val())
        text.val("")
    });
    
    
    
    $(`#posts`).on(`click`,`.deleteBtn`,function(){
        let postcontainer = $(this).closest('.post-container')
        controller.removePost(postcontainer.data().id    )
     
    });
    
    
    $(`#posts`).on(`click`,`.X`,function(){
        let postcontainer = $(this).closest('li')
        controller.removecomment($(this).closest('.post-container').data().id,postcontainer.data().id)
     
    });


