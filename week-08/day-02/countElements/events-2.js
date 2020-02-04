let list = document.getElementsByTagName("li");
let result = document.querySelector(".result");
let button = document.querySelector(".button");

button.onclick = () => {
    result.innerHTML = `${list.length}`;
};
