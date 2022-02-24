//  ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 

const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => displayComment(json))
}
// call loadComments
loadComment()

const displayComment = comments => {
    // console.log(comments);
    comments.forEach( comment => {
        // console.log(comment);
        const commentContainer = document.getElementById('comment-container');
        // create div
        const div = document.createElement('div')
        // give a class to div
        div.classList.add('comment-style');
        div.innerHTML = `
            <p>PostId :${comment.postId}</P>
            <p>id : ${comment.id}</P>
            <p>Name : ${comment.name}</P>
            <p>Email : ${comment.email}</P>
            <p>Body : ${comment.body}</P>
            <button onclick ="loadCommentById('${comment.id}')">Details</button>
        `;
        commentContainer.appendChild(div)
    })
} 

const loadCommentById = id => {
    // console.log(id);
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCommentDetails(data))
}

const displayCommentDetails = comment => {
    // console.log(comment);
    const cardTitle = document.getElementById('card-title');
    cardTitle.innerText = `
        Card Detials of ${comment.name} :
    `
    const commentDetalis = document.getElementById('comment-detail');
    commentDetalis.classList.add('comment-detail')
    commentDetalis.innerHTML = `
        <p>PostId :${comment.postId}</P>
        <p>id : ${comment.id}</P>
        <p>Name : ${comment.name}</P>
        <p>Email : ${comment.email}</P>
        <p>Body : ${comment.body}</P>
    `;

}