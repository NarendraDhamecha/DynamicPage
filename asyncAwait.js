//***********Promise code*************
// console.log('person 1: shows ticket');
// console.log('person 2: shows ticket');

// let wifeBringTicks = new Promise((resolve, reject) => {
//    setTimeout(() => {
//     resolve('ticket');
//    },3000);
// });

// let getPopcorn = wifeBringTicks.then((t) => {
//     console.log('wife: i have ticks');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} popcorn`);
//     });
// });

// let getButter = getPopcorn.then((t) => {
//     console.log('husband: i got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');
//     return new Promise((resolve, reject) => {
//         resolve(`${t} butter`);
//     });
// });

// let coldDrinks = getButter.then((t) => {
//     console.log(`husband: i got some butter on popcorn`);
//     console.log('husband: anything else darling?');
//     console.log('wife: yes i want cold drink too');
//     return new Promise((resolve,reject) => {
//         resolve(`${t} cold drinks`)
//     })
// })

// coldDrinks.then((t) => console.log(t));

// console.log('person 4: shows ticket');
// console.log('person 5: shows ticket');

//***********async await code*************

// console.log('person 1: shows ticket');
// console.log('person 2: shows ticket');

// let perMovie = async () => {
  
//     let wifeBringTicks = new Promise((resolve, reject) => {
//            setTimeout(() => {
//             resolve('ticket');
//            },3000);
//         });
    
//     let getPopcorn = new Promise((resolve,reject) => resolve('popcorn'));
    
//     let getButter = new Promise((resolve,reject) => resolve('butter'));

//     let coldDrinks = new Promise((resolve,reject) => resolve('cold drinks'))

//     let ticket = await wifeBringTicks;

//     console.log(`wife: i have ${ticket}`);
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');

//     let popcorn = await getPopcorn;

//     console.log(`husband: i got some ${popcorn}`);
//     console.log('husband: we should go in');
//     console.log('wife: i need butter on my popcorn');

//     let butter = await getButter;
    
//     console.log(`husband: i got some ${butter} on popcorn`);
//     console.log('husband: anything else darling?');
//     console.log('wife: yes i want cold drink too');
    
//     let cold_drinks = await coldDrinks;

//     console.log(`husband: i got ${cold_drinks}`);
//     console.log(`wife: ok.. lets go we are getting late`);


//     return ticket;
// }

// perMovie().then((m) => console.log(`person 3: shows ${m}`));

// console.log('person 4: shows ticket');
// console.log('person 5: shows ticket');

//******convert createpost and delete post into async await*******

// let posts = [
//     { title: 'post one', body: 'this is the post one'},
//     { title: 'post two', body: 'this is the post two'}
// ];


// function getPost() {

//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`;
//         }, 1000)

//         document.body.innerHTML = output;
//     })
// }

// let createPost = (post) => {
//     let error = false;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!error) {
//                 posts.push(post)
//                 resolve('success');
//             }
//             else {
//                 reject('error: something went wrong');
//             }
//         }, 2000)
//     })
// }

// let deletePost = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (posts.length > 0) {
//                 posts.pop()
//                 resolve('succesfuly deleted');
//             }
//             else {
//                 reject('array is empty now');
//             }
//         }, 1000)
//     });
// }

// async function print(){
    
//     try{
//         await createPost({title: 'post three', body: 'this is post three'})
//     getPost();

//     await deletePost();
//     getPost();

//     await deletePost();
//     getPost();

//     await deletePost();
//     getPost();

//     await deletePost();

//     }
//     catch(err){
//         console.log(err);
//     }
// }

//****** Favourite Interview Question Example********

//*********Callback functions************

// function Course(cb1, cb2){
//     setTimeout(() => {
//         console.log('course is completed');
//         cb1(cb2);
//     },3000)
// }

// function getJob(cb){
//     setTimeout(() => {
//         console.log('i got a job');
//         cb();
//     },2000)
// }

// function buyIphone(){
//     setTimeout(() => {
//         console.log('i will buy Iphone');
//     },1000);
// }

//Course(getJob,buyIphone);

//******Example with promise********

function Course(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('course is completed');
        },3000)
    })
}

function getJob(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('i got a job');
        },2000)
    })
}

function buyIphone(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('i will buy Iphone');
        },1000);
    })
}

// Course().then((m) => {
//    console.log(m);
//    getJob().then((m1) => {
//     console.log(m1);
//     buyIphone().then((m2) => {
//     console.log(m2);
//     })
//    })
// })

//*********Async Await Example*********

let p = async () => {
   
    let msg1 = await Course();
    console.log(msg1);

    let msg2 = await getJob();
    console.log(msg2);

    let msg3 = await buyIphone();
    console.log(msg3);
}

p();