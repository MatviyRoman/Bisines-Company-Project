/*$(window).on('load', function() {
	
	$('#testModalBtn').click(function() {
		$('#myModalTest').show();
	})
});*/


/*VyachukModal*/

$(window).on('load', function() {
	
	$('#testModalBtn').click(function() {
		$('#myModalTest').show('slow');
	})
	$('#testModalBtnClose').click(function() {
		$('#myModalTest').hide();
	})
});

/*myModalWindow*/

$(window).on("load", function() {
	$("#btnModalOpen").click(function() {

	$(".windowModal").show();
	})
	$("#btnModalClose").click(function() {
		$(".windowModal").hide();
	})
});

/*menu*/

$(function(){
	$('#showNavBar').on('click', function(){
	$('.navBar').slideToggle();
	$('.navBar').show();
	});
});


/*$(window).on('load', function() {
	$('#btn').click(function() {
		$('.windowModal').show();
	})
	$('#btnClose').click(function() {
		$('.windowModal').hide();
	})
});


$(window).on('load',function() {
	$('#btnOpen').click(function(){
	$('.windowModal').show();
	})
	$('#btnClose').click(function(){
	$('.windowModal').hide();
	})
});*/



/*$('open').click(function(){
	$('.windowModal').show();
});

$('close').click(function() {
	$('.windowModal').hide();
});*/