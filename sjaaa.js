const btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnitem = event.target
        var product = btnitem.parentElement
        var productimg = product.querySelector("img").src
        var productName = product.querySelector("h1").innerText
        var productPrice = product.querySelector("span").innerText
        //console.log(productPrice,productimg,productName)
        addcart(productPrice,productimg,productName)
    })
})
function addcart(productPrice,productimg,productName) {
    var addtr = document.createElement("tr")
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productimg+'" alt="">'+productName+'</td><td><p><span>'+productPrice+'</span>$</p></td><td><input style="width: 30px;outline: none; " type="number" value="1" min="1"></td><td style="cursor: pointer;">Xóa</td></tr>'
    addtr.innerHTML = trcontent
    var carttable = document.querySelector("tbody")
    //console.log(carttable)
    carttable.append(addtr)
    carttotal()
    
}
//-----------------------------totalprice------------------------------
function carttotal(){
    var cartitem = document.querySelectorAll("tbody tr ")
    var totalC = 0
    //console.log(cartitem.length)
    for (var i=0;i<cartitem.length;i++){
        var inputvalue = cartitem[i].querySelector("input").value
        //console.log(inputvalue)
        var productPrice = cartitem[i].querySelector("span").innerText
        //console.log(roductPrice)
        totalA = inputvalue*productPrice
        totalC = totalC + totalA
        //console.log(totalC)
    }
    var carttotalA = document.querySelector(".price-total span")
    carttotalA.innerHTML = totalC
}
