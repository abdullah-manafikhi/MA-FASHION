
document.addEventListener("DOMContentLoaded", function(){
    setTimeout( formAppear, 3000)
//====== products

var grid = document.querySelector("#ma__grid");
let prices = [];

let products = [
    {id : 0 , name : "Converse" , price : 150  , img : "assets/images/prod-shoes-2.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 1 , name : "Converse" , price : 94  , img : "assets/images/prod-shoes-5.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 2 , name : "Red shoes" , price : 80  , img : "assets/images/prod-shoes-3.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 3 , name : "Converse" , price : 200  , img : "assets/images/prod-shoes-5.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 4 , name : "Blue Heels" , price : 120  , img : "assets/images/prod-shoes-6.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 5 , name : "Converse" , price : 170  , img : "assets/images/prod-shoes-2.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 6 , name : "Blue Heels" , price : 110  , img : "assets/images/prod-shoes-6.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 7 , name : "White Top" , price : 60  , img : "assets/images/prod-full-5.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 8 , name : "Pink  Pj" , price : 79  , img : "assets/images/prod-full-7.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 9 , name : "Black Outfit" , price : 99  , img : "assets/images/prod-full-10.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 10, name : "White Outfit" , price : 160  , img : "assets/images/prod-full-9.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 11, name : "orange top" , price : 170  , img : "assets/images/prod-full-8.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 12, name : "Blue Jacket" , price : 39  , img : "assets/images/prod-full-12.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 13, name : "Brown Coat" , price : 74  , img : "assets/images/prod-full-11.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 14, name : "White Top" , price : 129  , img : "assets/images/prod-full-5.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 15, name : "Orange Top" , price : 249  , img : "assets/images/prod-full-8.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 16, name : "Blue Jacket" , price : 126.5  , img : "assets/images/prod-full-12.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 17, name : "Black Dress" , price : 145  , img : "assets/images/prod-full-13.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 18, name : "Orange Top" , price : 300  , img : "assets/images/prod-full-8.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 19, name : "White Outfit" , price : 140  , img : "assets/images/prod-full-9.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
    {id : 20, name : "Blue Jacket" , price : 100  , img : "assets/images/prod-full-12.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."}

  ];

  /// displaying all of the products
  
  let filtered = products ;

  for(let i=0 ; i<filtered.length ; ++i){
    newproduct(filtered[i]);
}


// ============  filtering method
let filterBtn = document.getElementById("ma__filter__btn");
let filter = document.getElementById("ma__filter")
let card = document.querySelectorAll(".card")  
let submitBtn = document.getElementById("ma__filter__submit")
let input = document.querySelectorAll(".ma__filter__item")
let adds  = document.querySelectorAll(".ma__shop .ma__prod__btn1");
let a 
submitBtn.addEventListener("click" , () => {
    filter.classList.toggle("ma__filter__closed");
    filter.classList.toggle("ma__filter__opened")
    filtered = [] ;
    grid.innerHTML = "" ;
    input.forEach(inpt => {
        if(inpt.checked){
            if(inpt.value == "full outfit"){
                var results = products.filter(prod => (prod.type === "full__outfit"))
                results.forEach(result => filtered.push(result))
            }
            else if(inpt.value == "shoes"){
                var results = products.filter(prod => (prod.type === "shoes"))
                results.forEach(result => filtered.push(result))
            }
            else if(inpt.value == "tops"){
                var results = products.filter(prod => (prod.type === "tops"))
                results.forEach(result => filtered.push(result))
            }
            else if(inpt.value == "all"){
                filtered = products
            }
            else if(inpt.value == "ascend"){
              filtered = filtered.sort((a ,b) => a.price > b.price ? +1 : a.price < b.price ? -1 : 0)
            }
            else{
                filtered = filtered.sort((b ,a) => a.price > b.price ? +1 : a.price < b.price ? -1 : 0)
            }
        }
    })

    for(let i=0 ; i < filtered.length ; ++i){
        console.log(filtered[i])
     newproduct(filtered[i])
    }
    let addz  = document.querySelectorAll(".ma__shop .ma__prod__btn1");


    // ADDING TO CART
    addz.forEach(add => add.addEventListener("click" , addToCart))
    console.log(addz)
    
})

// ======= Filter Window ======


filterBtn.addEventListener("click" , () => {
    filter.classList.toggle("ma__filter__closed")
    filter.classList.toggle("ma__filter__opened")
   if( card[0].style.zIndex == "-1"){
    filter.style.zIndex = "-1"
    card.forEach( crd => {crd.style.zIndex = "+1"})
     }
   else if( card[0].style.zIndex == "+1"){
    card.forEach( crd => {crd.style.zIndex = "-1"})
    filter.style.zIndex = "+1"

}

})

// =============== Form ===============

let form = document.querySelector(".ma__form__sec");
let clsbtn = document.querySelector(".ma__form__closebtn")
clsbtn.addEventListener("click" , () => form.style.display = "none")

// ==== FORM VALIDATION =====

let sign =  document.getElementById("ma__form__btnlog")
let inpts = document.querySelectorAll("input.ma__form__input")

let regex = {
    email : /^([\w\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ ,
    pwd :/^[^.].{8,20}$/ ,
}

let errors = {
    email : "Email must be a valid address e.g.me@mydomain.com ! and you must only use alpanumerical '-' or '_' ",
    pwd : "Your Password should be between 8 and 20 charecters" ,
    pwd__rpt : "The Passwords are different" 
}

inpts.forEach(inpt => {
    inpt.addEventListener("blur" , (e) => {
        let name = e.target.attributes.name.value ;
        validate(regex[name] ,e.target.value, e.target , name)
    })
})

// =================== SHOPPING CART =======================

let cartBtn = document.querySelector(".ma__cart__closebtn")
let cart = document.querySelector(".ma__cart__sec");
let opnbtn = document.querySelector("#ma__cart__opnbtn")
let cartAttach = document.getElementById("ma__cart__item__attach")
let totPrice = document.getElementById("ma__total__price")


// OPENING THE CART
opnbtn.addEventListener("click" , () => {
    cart.style.display = "block";
    cart.style.zIndex = "+1";
} )

// CLOSING THE CART WINDOW
cartBtn.addEventListener("click" , () => {cart.style.display = "none" })

// ADDING TO CART
adds.forEach(add => add.addEventListener("click" , addToCart))



// ============ FUNCTIONS ================

// cart counter

function countChange(count , clas , price){    
    if(clas.contains("inc"))    {
        count.textContent++;
        tot = +totPrice.textContent
        tot += Number(price);
        totPrice.textContent = tot
    }
    else{
        if(count.textContent > 1){
            count.textContent-- ;
            tot = +totPrice.textContent
            tot += Number(price);
            totPrice.textContent = tot;
        }
    } 
    
}

// Form Validation Form

function validate(regex , text ,target , name){
    let msg = target.previousSibling.previousSibling;
        if(name == "pwd__rpt"){
            if((text !== inpts[1].value)){
                msg.textContent = errors[name];
                msg.classList = "ma__form__msg ma__form__failed";
                return
            }
            else{
                msg.textContent = "successed !";
                msg.classList = "ma__form__msg ma__form__succes"
                return
            }
        }
        if(regex.test(text)) {  
            msg.textContent = "successed !";
            msg.classList = "ma__form__msg ma__form__succes" ;
            }
        else {
            msg.textContent = errors[name] ;
            target.previousSibling.previousSibling.classList = "ma__form__msg ma__form__failed"
            }
}


///  shop function

function newproduct(prod){
    let newProd = document.createElement("div");
      newProd.className = "ma__grid__item";
      newProd.innerHTML =  `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top crd_img" src=${prod.img} alt="Card image cap">
            <div class="card-body container">
                <div class="row ma__prod__name">
                    <h2>${prod.name}<h2>
                </div>      
                <div class="row ma__prod__details">
                    <p>Lorem ipsum dolor, sit amet consectetur llitia. Quo</p>
                </div>  
                <div class="row ma__prod__name text-center">
                    <p class="col-lg-12">price : ${prod.price}$</p>     
                </div>   
                <div class="row ma__prod__name d-flex justify-content-center">
                    <button name ="${prod.id}" type="button" class="btn btn-primary ma__prod__btn ma__prod__btn1">Add To Cart</button>
                    <button type="button" class="btn btn-primary ma__prod__btn ma__prod__btn2">More Details</button>
                </div>                        
            </div>
        </div>  `;
  
    grid.appendChild(newProd);
  }

  // ADDING TO CART FUNCTION

  function addToCart(e){
      console.log(prices)
    if(opnbtn.className !== "ma__cart__opnbtn"){
     opnbtn.className ="ma__cart__opnbtn";
    }

    console.log(opnbtn.style.zIndex)
    let prodId = e.target.attributes.name.value
    let newPurch = document.createElement("div");
    newPurch.className = "ma__cart__item text-center mt-5"
    newPurch.innerHTML = `
            <div class="">
                <img class="ma__cart__img" src="${products[prodId].img}" alt="">
            </div>
            <div class="" style=" padding: 2.5rem 0rem;">
                <span class="ma__cart__item__name">${products[prodId].name}</span>
            </div>
            <div class="d-grid align-content-center">
                <span id="ma__cart__counter">1</span>
            </div>
            <div class=" d-grid align-content-center">
                <i class='ma__cart__btns inc bx bxs-up-arrow'></i>
                <i class='ma__cart__btns dec bx bxs-down-arrow'></i>
            </div>
            <div class=" d-grid align-content-center">
                <span>${products[prodId].price}</span>
            </div>
            <div>
                <button class="ma__item__clsbtn"><i class='bx bxs-x-circle'></i></button> 
            </div> ` ;
    
    prices.push(products[prodId].price);   
    cartAttach.appendChild(newPurch);
    let btns  = document.querySelectorAll(".ma__cart__btns");
    let close = document.querySelectorAll(".ma__item__clsbtn");
     
    // CART COUNTER

    btns[btns.length-2].addEventListener("click" , (e) => {
        let count = e.target.parentNode.parentNode.children[2].children[0];
        countChange( count,e.target.classList ,e.target.parentNode.previousSibling.parentNode.children[4].textContent)
    })

    btns[btns.length-1].addEventListener("click" , (e) => {
        let count = e.target.parentNode.parentNode.children[2].children[0];
        let num = -1 * Number(e.target.parentNode.previousSibling.parentNode.children[4].textContent)
        countChange( count,e.target.classList,num)
    })


// DELETE PURCHASED ITEM 

    close[close.length-1].addEventListener("click" , () =>  {
    let parent = close[close.length-1].parentNode.parentNode;
    parent.style.display = "none";
    cont = Number(close[close.length-1].parentNode.parentNode.children[2].textContent)
    console.log(cont)
    total = Number(close[close.length-1].parentNode.parentNode.children[4].textContent)*cont
    tot = +totPrice.textContent
    tot-=total
    totPrice.textContent = tot
    });

// TOTAL PRICE
    totPrice.textContent = prices.reduce((partialSum, a) => partialSum + a, 0); 
 }
 

  //=== FORM Function===
  
  function formAppear(){
    form.style.display = "block";

}



})
