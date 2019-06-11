/**
 google maps
 */
function initMap() {
    const loc = { lat: 23.810331, lng: 90.412521 };
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    const marker =new google.maps.Marker({ position: loc, map: map});
}
//smooth scrolling

$('#nav-bar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });
  //menu background
  window.addEventListener('scroll', function(){
if(window.scrollY > 150){
    document.querySelector('#nav-bar').style.opacity = 0.8; 
}else{
    document.querySelector('#nav-bar').style.opacity=1;
}
  });
