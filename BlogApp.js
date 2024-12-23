function createPost() {
    const postContent = document.getElementById("postContent").value;

    if (postContent.trim() === "") {
        alert("Please write something before adding a post!");
        return;
    }

    const postList = document.getElementById("postsList");

    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const postText = document.createElement("p");
    
    postText.textContent = postContent;
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        deletePost(postElement);
    };

    // Append content to the post
    postElement.appendChild(postText);
    postElement.appendChild(deleteButton);

    // Add the post to the posts list
    postList.appendChild(postElement);

    // Clear the input field
    document.getElementById("postContent").value = "";
}

// Delete a post
function deletePost(postElement) {
    postElement.remove();
}
