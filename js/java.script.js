$(document).ready(function(){
		 $("h1,h2,h3,h4,h5").each(function () {
			 this.innerHTML = this.innerHTML.replace( /^(.+? )/, "<span>$1</span>" );
			 this.innerHTML = this.innerHTML.replace( /^(.+?ws)/, "<span>$1</span>" );
         });
		 });


$('body').scrollspy({ target: '#modalBtn' })

$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTab a[href="#profile"]').tab('show') // Виберіть вкладку по назві
		 

		 /*function changeClass() {
    $('.el').replaceClass('about', 'services'); 
}/*



		 /*var getBtn = {$(document('btn') {			 
		 alert (getBtn.dataset.btn);
		 });
		 }
		 /*


		 /*var f = function( {
			 $('#about').click(function)() {
				 ($'#text-content').html('test')				 
			 )};*/
		 
		 /*
		 $( "button" ).id( "about" ).click( function( {
			 $('#text-content').html('test')
		 )};
)};*/



/*
$(document).ready(function(){
		 $("#about").click( function() {
		 $('#text-content').html('this')
		 )};
)};
  //alert( this.id );*/


           /* function clickBtn(e){
            
             var idPage = $(e).attr('id');
             $("#text-content").hide();
             $("#btn button").removeClass("used");
                $(e).addClass("used");	
             $(idPage).fadeIn(600);
            }*/

			
		/*window.onload = function() {
			$('about').onclick = function () {
				$('text-content').style.background = 'theme/services.png';
				return false;
			}
		}*/





	/*function clickBtn()
{
    $("body").css("background-image","url('theme/services.png')"); // Onclick of button the background image of body will be test here. Give the image path in url
    $('#text-content').hide(); //This will hide the button specified in html
	 /*clickBtn = $(this).attr('id');
	 
	$('#text-content').html(clickBtn);
    });
}	 */
		

		/*$(document).click(function(clickBtn){
	$('text-content').css({
		'background': 'none',
		'font-weight': 'bold'
	});
}); 
		 
$(document).ready(function(clickBtn) {
    var idBtn = "none";
    $('#btn button').click(function() {
       idBtn = $(this).attr('id');
	   $(this).hide();
	   $('#text-content').html(idBtn);
	    $("body").css("background","url('theme/img/' + idBtn + '.png')");
    });
});
alert clickBtn;   */







    /*$("#text-content").attr(function() {
       var btnClass = ['about','#4b6178;','glob'];;
    });
});
		 
		 $('.btn').click( function() {
  alert( "hello" ); // jQuery позаботится о том, чтобы 'this' являлась кнопкой
});


		 $("button [id=services]").on("click", function(e) {
			 this.innerHTML = this.innerHTML.replace( "glob", "services" );
		 }
		 $("button [id=services]").on("click", function(e){
			 e.preventDefault();
		 });
		 
		 function idClass(){
var idClass = ['about','#4b6178','glob'];
		 }
		 
		 /*function idClass() {
  $('about').innerHTML="Привет";
}

$('about').onclick=idClass;*/
