let button = document.querySelector("button");
let main = document.querySelector("#main");
button.addEventListener("click", function(){
    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);

    main.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;
})