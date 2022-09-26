let view = document.querySelector(".view")
let body = document.querySelector("body")

body.addEventListener("click", function (e) {
    let icon = document.querySelector(".icon")
    let box = document.querySelector(".box")
    console.log(e)

    if (e.target.className == "view") {
        body.innerHTML += `<div class="box">
        <img src="${e.target.dataset.url}" alt="">
        <div class="icon">X</div>
    </div>
  `

    } else if (e.target.className == "box" || e.target.className == "icon") {
        box.remove();
    }

})