let qty = document.querySelector(".qautity");
let plusBtn = document.querySelector(".plusBtn");
let minusBtn = document.querySelector(".minusBtn");
let backBtn = document.querySelector(".backBtn"); 
let card = document.querySelector("#card1"); 
let preImg = document.querySelector("#pre-image"); 
let preImg4 = document.querySelector("#pre-image4"); 
if (qty.innerHTML < 1) {
    qty.innerHTML = 1;
}



plusBtn.addEventListener("click", () => {
    qty.innerHTML = parseInt(qty.innerHTML) + 1;
})

minusBtn.addEventListener("click", () => {
    let allqty = parseInt(qty.innerHTML); 
    if (allqty > 0) {
        qty.innerHTML = allqty - 1; 
    } else {
        qty.innerHTML  = 0;
    }
})

backBtn.addEventListener("click", ()=> {
    window.location.href = "/index.html"
})
preImg4.addEventListener("click", () =>{
    preImg.src = preImg4.src; 
})
