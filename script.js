
        jQuery(function($){
          var $navbar = $('.navbar');
          $(window).scroll(function(event){
            var $current = $(this).scrollTop();
            if($current > 0){
                $navbar.addClass('navbar-color');
            }
            else{
                $navbar.removeClass('navbar-color');
            }
          });
        });

  
const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});

// destination 

// jQuery(document).ready(function($){
//     $('.slider-img').on('click',function(){
//       $('.slider-img').removeClass('active');
//       $(this).addClass('active');
//     })
//   });

