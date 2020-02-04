let mybutton = document.querySelector("button");
let mytext = document.getElementsByClassName("text")[0];

//solution 1
/*mybutton.onclick = () => {
    console.log(new Date().getTime());
    mytext.innerHTML = `${(new Date().getTime())}`;
    mybutton.disabled = true;
};*/

//solution 2
mybutton.addEventListener('click', () => {
    console.log(new Date().getTime());
    mytext.innerHTML = `${(new Date().getTime())}`;
    mybutton.disabled = true;
});

