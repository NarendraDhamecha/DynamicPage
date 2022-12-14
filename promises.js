
let posts = [
    { title: 'post one', body: 'this is the post one'},
    { title: 'post two', body: 'this is the post two'}
];

function getPost() {

    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        }, 1000)

        document.body.innerHTML = output;
    })
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            let error = false;

            if (!error) {
                resolve();
            }
            else {
                reject('error: something went wrong');
            }
        }, 2000)
    })
}

let user = {
    username: 'nikhil',
    lastActTime: new Date()
};

function updateLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActTime = new Date().getTime();
            resolve(user.lastActTime);
            
        },1000)
    })
};

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (posts.length > 0) {
                resolve(posts.pop());
            }
            else {
                reject('array is empty now');
            }
        }, 1000)
    })
}

Promise.all([createPost,updateLastUserActivityTime]).then(() =>{
    deletePost().then(console.log(posts));
})

// createPost({title: 'post three', body: 'this is post three'})
// .then(updateLastUserActivityTime).then(console.log(`before created post 4 ${user.lastActTime}`))
// createPost({title: 'post four', body: 'this is post four'})
// .then(updateLastUserActivityTime).then((time) => console.log(`after created post 4 ${time}`))

// Promise.all([createPost, updateLastUserActivityTime]).then(console.log(posts))





// createPost({title: 'post three', body: 'this is post three'})
// createPost({title: 'post four', body: 'this is post four'})
// .then(getPost).then(deletePost).catch(err => console.log(err))
// .then(getPost).then(deletePost).catch(err => console.log(err))
// .then(getPost).then(deletePost).catch(err => console.log(err))
// .then(getPost).then(deletePost).catch(err => console.log(err))
// .then(getPost).then(deletePost).catch(err => console.log(err))


// let promise1 = Promise.resolve('hello world');
// let promise2 = 10;
// let promise3 = new Promise((resolve, reject) => {
//    setTimeout(resolve,2000,'Good bye');  
// })

// Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));
