$(document).ready(function() {
    // Vista Splash de 2 a 5 segundos
    setTimeout(function() {
        $(".one").fadeOut(1500);
    },3000);

// redireccionar a vista principal
    setTimeout(function() {
        $(".two").fadeIn(1500);
    },3000);

// filtro por tipo de comida
 var cont = $('#container');
    
    $('#categorias').on('change', function() {
    	var selection = $('#categorias').val();
      //cont.text(selection);
      if( selection === "venezolana") {
      cont.html('<div class="vzla col-lg-12 "><div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"><a href="#"><img  class="breakfast img-responsive" src="assets/img/vzla/arepas.jpg" alt=""></a></div><div class="breakfast col-lg-4 col-md-4 col-sm-4 col-xs-4"><a href="#"><img  class="img-responsive" src="assets/img/vzla/cachapas.jpg" alt=""></a></div><div class="breakfast col-lg-4 col-md-4 col-sm-4 col-xs-4"><a href="#"><img  class="img-responsive" src="assets/img/vzla/tequeños.jpg" alt=""></a></div></div><div class="vzla1 col-lg-12"><div class="dinner col-lg-6 col-md-6 col-sm-6 col-xs-6"><a href="#"><img  class="img-responsive" src="assets/img/vzla/pabellon.jpg"alt=""></a></div><div class="dinner col-lg-6 col-md-6 col-sm-6 col-xs-6 "><a href="#"><img  class="img-responsive" src="assets/img/vzla/hallaca1.jpg" alt=""></a></div></div>');
      }
      if( selection === "chilena") {
      cont.html('<div class="chile col-lg-12"><div class="chile1 col-lg-12"><div class=" breakfast1 col-lg-6 col-md-6 col-sm-6 col-xs-6"><a href="#"><img  class="img-responsive" src="assets/img/chile/dobladitas.jpg" alt=""></a></div><div class="breakfast1 col-lg-6 col-md-6 col-sm-6 col-xs-6"><a href="#"><img  class="img-responsive" src="assets/img/chile/empanadas.jpg" alt=""></a></div></div><div class="chile2 col-lg-12"><div class="dinner1 col-lg-4 col-md-4 col-sm-4 col-xs-4"><a href="#"><img  class="img-responsive" src="assets/img/chile/chorrillana.jpg" alt=""></a></div><div class="dinner1 col-lg-4 col-md-4 col-sm-4 col-xs-4 "><a href="#"><img  class="img-responsive" src="assets/img/chile/anticucho.jpeg" alt=""></a></div><div class="dinner1 col-lg-4 col-md-4 col-sm-4 col-xs-4 "><a href="#"><img  class="img-responsive" src="assets/img/chile/completos.jpg" alt=""></a></div></div></div>');
      }
      if( selection === "peruana") {
      cont.html('<div class="peru col-lg-12"><div class="peru1 col-lg-12"><div class="dinner2 col-lg-4 col-md-4 col-sm-4 col-xs-4 "><a href="#"><img  class="img-responsive" src="assets/img/peru/ceviche.jpg" alt=""></a></div><div class="dinner2 col-lg-4 col-md-4 col-sm-4 col-xs-4 "><a href="#"><img  class="img-responsive" src="assets/img/peru/causa limeña.jpeg" alt=""></a></div><div class="dinner2 col-lg-4 col-md-4 col-sm-4 col-xs-4 "><a href="#"><img  class="img-responsive" src="assets/img/peru/pastaca.png" alt=""></a></div></div></div><div class="peru2 col-lg-12"><div class=" breakfast3 col-lg-6 col-md-6 col-sm-6 col-xs-6"><a href="#"><img  class="img-responsive" src="assets/img/peru/tamal.jpg" alt=""></a></div><div class="breakfast3 col-lg-6 col-md-6 col-sm-6 col-xs-6"><a href="#"><img  class="img-responsive" src="assets/img/peru/tachao.jpeg" alt=""></a></div></div>');
      }
      if( selection === "0"){
	cont.html('');
      }
})
});
	