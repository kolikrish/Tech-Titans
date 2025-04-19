let formBtn = document.querySelector('#Obtn');
let closeBtn = document.querySelector('#CBtn');
let full = document.querySelector('#full');


formBtn.addEventListener("click",() => {
    full.style.right = "0";
    console.log("hello word");
})


closeBtn.addEventListener("click",() => {
    full.style.right = "-40%";
})

