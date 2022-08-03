let div = document.querySelector(".inertxt");
let done = document.querySelector(".done");
let h2 = document.querySelector("h2");
let txt = document.querySelector("#txt");
let btn = document.querySelector("button");
let p = document.querySelector(".inertxt p");

done.addEventListener("click", function () {
  localStorage.clear();
  div.innerHTML = ``;
});

if (window.localStorage.getItem("text")) {
  div.innerHTML = window.localStorage.getItem("text");
}
btn.addEventListener("click", function () {
  if (txt.value != "") {
    let np = p.cloneNode(true);
    np.className = "clone";
    //----
    np.append(txt.value);
    let remo = document.createElement("button");
    remo.className = "rem";
    remo.append("Remove");
    np.append(remo);
    //--------------
    // np.innerHTML = `${txt.value} <button class="rem">Remove</button> `;

    div.append(np);
    window.localStorage.setItem("text", div.innerHTML);
    div.innerHTML = window.localStorage.getItem("text");
  }
});
document.addEventListener("click", function (e) {
  if (e.target.className == "rem") {
    e.target.parentElement.remove();
    window.localStorage.setItem("text", div.innerHTML);
    div.innerHTML = window.localStorage.getItem("text");
  }
});
