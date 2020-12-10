$(document).ready(function (e) {
    let data = aggregate()
    console.log(data)
    show_posts(data)
})

function show_posts(data) {
    data.map(item => {
        $('.main').append(`<div class="card border-success col-4 mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">${item.user['user_name']}</div>
    <div class="card-body text-success">
      <h4 class="card-title">${item.post_title}</h4>
      <p class="card-text">${item.post_body}</p>
    </div>
    <div class="card-footer bg-transparent border-success">
        <h6>${item.comments['comment_author']} :</h6>
        <p class="card-text">${item.comments['commemt_body']}</p>
    </div>
  </div>`)
    })
}

function aggregate() {
    let users = []
    let posts = []
    let comments = []
    final_result = []

    get_all().then((posts_data, users_data, comments_data) => {
        posts = posts_data
        users = users_data
        comments = comments_data
    }).catch(() => {
        console.log('Error!')
    })
    console.log(posts, users, comments)
    posts.map(item => {
        let post_title = item.title
        let post_id = item.id
        let post_body = item.body
        let user_id = item.userId
        users.map(item => {
            if (item.id == user_id) {
                let user_name = item.name
                let email = item.email
                return
            }
        })
        comments.map(item => {
            if (item.postId == post_id) {
                comment_author = item.name
                comment_body = item.body
            }
        })
        data = {
            user: {
                name: user_name,
                email: email
            },
            post_id: post_id,
            post_title: post_title,
            post_body: post_body,
            comments: {
                comment_author: comment_author,
                comment_body: comment_body
            }
        }
        final_result.push(data)
        return final_result
    })

}

function get_users() {
    let promise = new Promise((resolve, reject) => {
        $.ajax({
            type: 'get',
            url: 'https://jsonplaceholder.ir/users',
            success: function (response) {
                resolve(response)
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                reject('Something went wrong!')
            }
        })
    })
    return promise
}

function get_posts() {
    let promise = new Promise((resolve, reject) => {
        $.ajax({
            type: 'get',
            url: 'https://jsonplaceholder.ir/posts',
            success: function (response) {
                resolve(response)
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                reject('Something went wrong!')
            }
        })
    })
    return promise
}

function get_comments() {
    let promise = new Promise((resolve, reject) => {
        $.ajax({
            type: 'get',
            url: 'https://jsonplaceholder.ir/comments',
            success: function (response) {
                resolve(response)
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                reject('Something went wrong!')
            }
        })
    })
    return promise
}


function get_all() {
    let promise = new Promise((resolve, reject) => {
        get_posts().then(posts_data => {
            get_users().then(users_data => {
                get_comments().then(comments_data => {
                    posts_data = posts_data
                }).catch(() => {
                    console.log(comments_data)
                })
            }).catch(() => {
                console.log(users_data)
            })
        }).catch(() => {
            console.log(posts_data)
        })
        resolve(posts_data, users_data, comments_data)
        reject('Something went wrong!')
    })
    console.log(promise)
    return promise
}