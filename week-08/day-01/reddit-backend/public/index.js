'use strict';

window.onload = () => {
    let postReq = new XMLHttpRequest();
    postReq.open('GET', 'http://localhost:3000/posts')
    postReq.send();
    postReq.onload = (response) => {
        if (response.target.status === 200) {
            let resultObject = JSON.parse(response.target.response);

            resultObject.forEach(post => {
                showPosts(post)
            })
        }
    }
};

function showPosts(post) {
    let postsSection = document.getElementById("suggestions");
    const mancika = document.querySelector('.mancika');
    let section = document.createElement("section");
    let owner =document.createElement("small");
    owner.innerHTML = post.owner;
    let heading = document.createElement("h2");
    heading.innerHTML = post.title;
    let paragraph = document.createElement("p");
    paragraph.innerHTML = post.url;

    section.appendChild(owner);
    section.appendChild(heading);
    section.appendChild(paragraph);
    postsSection.appendChild(section);
    console.log(postsSection)
};