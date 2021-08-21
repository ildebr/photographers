
/*
$(document).on('click', 'a[href^="#"]', function(e){
	console.log('id ' + $(this).attr('id'));
	b = $(this).attr('id');
	e.preventDefault();
	//console.log($(this).attr('href'));
	var leftpos = $('section.landing-pics').scrollLeft();
	var xmov = $("div.pic-container").css("width");
	if (b == 'b' && xmov >= 0){
		xmov *=-1
	}
	if ($("section.landing-pics").scrollLeft() == 0 && b =='b'){
		console.log("break")
		break;
	}
	$('section.landing-pics').animate({
        
        scrollLeft: xmov
        //scrollLeft: $("#img2").offset().left
	},200,'linear');
	});
*/
var picsact = "martin"
var xmov=0;
var q = $("div.pic-container").length -1;
q = $("div.pics-container#actual >div.pic-container").length -1;
var w = parseInt($("div.pic-container").css("width"),10);

$("#right").click(function(){

	console.log("entro");
	w =parseInt($("div.pic-container").css("width"),10);
	console.log('w ' + w + ' xmov ' + xmov + 'w*q' + w*q);
	if(xmov >= w*q){
		return;
	}
	xmov+=w;
	console.log(w)
	//$('section.landing-pics').animate({
        $('div.pics-container').animate({
        scrollLeft: xmov
        //scrollLeft: $("#img2").offset().left
	},200,'linear');
})

$("#left").click(function(){
	console.log($("div.pics-container").scrollLeft())
	if(parseInt($("div.pics-container").scrollLeft(),10) == 0){
		console.log("entro2")
		return;
	}else{
	w =parseInt($("div.pic-container").css("width"),10);
	
	xmov-=w;
	console.log(w)
	//$('section.landing-pics').animate({
      $("div.pics-container").animate({ 
        scrollLeft: xmov
        //scrollLeft: $("#img2").offset().left
	},200,'linear');
}
})


$("div.punto").click(function(){
	console.log($(this).attr('id'));
	$("h1.actual").toggleClass("actual")
	act = $(this).attr('id');
	$("h1#" + $(this).attr('id') + "-title").toggleClass("actual");
	$("p.actual-p").toggleClass("actual-p");
	$("p#" + act + "-description").toggleClass("actual-p")


	console.log($(this).attr("data-number"));
	movi = parseInt($(this).attr("data-number"),10);
	p= (w*-1*movi) +w;
	console.log("p" + p + " movi " + movi + " w " + w);
	$("div.pics-container").css("left", p);

	$(".pics-container#actual").attr("id", "")
	$('[data-pics-container="' + act +'"]').attr("id", "actual");
	$("main").removeClass();
	$("main").addClass("grid-container");
	$("main").addClass(act);

})
