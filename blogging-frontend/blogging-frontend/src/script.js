const API = "http://127.0.0.1:8000/api/blogs/";

// Load blogs
function loadBlogs() {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            const blogList = document.getElementById("blogList");
            blogList.innerHTML = "";

            data.forEach(blog => {
                blogList.innerHTML += `
                    <div class="blog">
                        <h3>${blog.title}</h3>
                        <p>${blog.content}</p>
                        <button onclick="likeBlog(${blog.id})">❤️ ${blog.likes}</button>

                        <br><br>
                        <input id="comment-${blog.id}" placeholder="Add comment">
                        <button onclick="addComment(${blog.id})">Comment</button>

                        <div>
                            ${blog.comments.map(c => `<p>- ${c.text}</p>`).join("")}
                        </div>
                    </div>
                `;
            });
        });
}

// Create blog
function createBlog() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content })
    }).then(() => {
        loadBlogs();
    });
}

// Like blog
function likeBlog(id) {
    fetch(`http://127.0.0.1:8000/api/blogs/${id}/like/`, {
        method: "POST"
    }).then(() => loadBlogs());
}

// Add comment
function addComment(id) {
    const text = document.getElementById(`comment-${id}`).value;

    fetch(`http://127.0.0.1:8000/api/blogs/${id}/comment/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    }).then(() => loadBlogs());
}

// Initial load
loadBlogs();