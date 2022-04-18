document.addEventListener("DOMContentLoaded", function(){

  // ==================== products ==================

      let products = [
        {id : 1 , name : "White Top" , price : 100  , img : "assets/images/prod-shoes-2.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 2 , name : "White Top" , price : 100  , img : "assets/images/prod-shoes-5.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 3 , name : "White Top" , price : 100  , img : "assets/images/prod-shoes-3.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 4 , name : "White Top" , price : 100  , img : "assets/images/prod-shoes-5.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 5 , name : "White Top" , price : 100  , img : "assets/images/prod-shoes-6.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 6 , name : "White Top" , price : 100  , img : "assets/images/prod-shoes-2.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 7 , name : "White Top" , price : 100  , img : "assets/images/prod-shoes-6.jpg", type : "shoes" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 8 , name : "White Top" , price : 100  , img : "assets/images/prod-full-5.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 9 , name : "White Top" , price : 100  , img : "assets/images/prod-full-7.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 10, name : "White Top" , price : 100  , img : "assets/images/prod-full-10.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 11, name : "White Top" , price : 100  , img : "assets/images/prod-full-9.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 12, name : "White Top" , price : 100  , img : "assets/images/prod-full-8.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 13, name : "White Top" , price : 100  , img : "assets/images/prod-full-12.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 14, name : "White Top" , price : 100  , img : "assets/images/prod-full-11.jpg", type : "full__outfit" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 15, name : "White Top" , price : 100  , img : "assets/images/prod-full-5.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 16, name : "White Top" , price : 100  , img : "assets/images/prod-full-8.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 17, name : "White Top" , price : 100  , img : "assets/images/prod-full-12.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 18, name : "White Top" , price : 100  , img : "assets/images/prod-full-13.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 19, name : "White Top" , price : 100  , img : "assets/images/prod-full-8.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 20, name : "White Top" , price : 100  , img : "assets/images/prod-full-9.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."},
        {id : 21, name : "White Top" , price : 100  , img : "assets/images/prod-full-12.jpg", type : "tops" ,  details : "Lorem ipsum dolor sit amet consectetur, card's content."}

      ];

  //=========== SHOES SWIPER =================

      newSlide("shoes" , products[0].name, products[0].img , products[0].price);
      newSlide("shoes" , products[1].name, products[1].img , products[1].price);
      newSlide("shoes" , products[2].name, products[2].img , products[2].price);
      newSlide("shoes" , products[3].name, products[3].img , products[3].price);
      newSlide("shoes" , products[4].name, products[4].img , products[4].price);
      newSlide("shoes" , products[5].name, products[5].img , products[5].price);
      newSlide("shoes" , products[6].name, products[6].img , products[6].price);

  //=========== TOPS SWIPER ===================

  newSlide("tops" , products[7].name, products[7].img , products[7].price);
  newSlide("tops" , products[8].name, products[8].img , products[8].price);
  newSlide("tops" , products[9].name, products[9].img , products[9].price);
  newSlide("tops" , products[10].name, products[10].img , products[10].price);
  newSlide("tops" , products[11].name, products[11].img , products[11].price);
  newSlide("tops" , products[12].name, products[12].img , products[12].price);
  newSlide("tops" , products[13].name, products[13].img , products[13].price);

  //=========== FULL OUTFIT ===================

  newSlide("full" , products[14].name, products[14].img , products[14].price);
  newSlide("full" , products[15].name, products[15].img , products[15].price);
  newSlide("full" , products[16].name, products[16].img , products[16].price);
  newSlide("full" , products[17].name, products[17].img , products[17].price);
  newSlide("full" , products[18].name, products[18].img , products[18].price);
  newSlide("full" , products[19].name, products[19].img , products[19].price);
  newSlide("full" , products[20].name, products[20].img , products[20].price);


 

  // ============= FUNCTION =======================

  /// swiper function

  function newSlide(depart , name , img , price , details){
    var swiperz = document.getElementById(`${depart}__swiper`);
    let newSlide = document.createElement("div");
      newSlide.className = "swiper-slide";
      newSlide.innerHTML =  `
                                  <div class="card" style="width: 18rem;">
                                      <img id="card_imgz" class="card-img-top crd_img" src=${img} alt="Card image cap">
                                      <div class="card-body container">
                                          <div class="row ma__prod__name">
                                              <h2>${name}<h2>
                                          </div>  
                                          <div class="row ma__prod__details">
                                              <p>Lorem ipsum dolor, sit amet consectetur llitia. Quo</p>
                                          </div>  
                                          <div class="row ma__prod__name text-center">
                                              <p class="col-lg-12">price : ${price}$</p>
                                          </div>   
                                          <div class="row ma__prod__name d-flex justify-content-center">
                                              <button type="button" class="btn btn-primary ma__prod__btn ma__prod__btn1">Add To Cart</button>
                                              <button type="button" class="btn btn-primary ma__prod__btn ma__prod__btn2">More Details</button>
                                          </div>                        
                                      </div>
                                   </div> `;
      swiperz.appendChild(newSlide);

  }


  

  // ========= swiper =============

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        240: {
            slidesPerView: 1,
          },

        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        860: {
          slidesPerView: 3,
          spaceBetween: 50,
        } },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        },
        speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
  }); 

});


//========= SCROLL REAVEAL ======

const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: true
});

sr.reveal(`.ma__home__div,.values,.swiper-wrapper,.contact__data,.footer__data`, {
  interval: 200
})

ScrollReveal().reveal('.ma__sec__hdr', { origin: 'right' });

 
