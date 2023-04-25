window.addEventListener("scroll",function(){
	
	let header=document.getElementById("navbar")
	
	header.classList.toggle("sticky",window.scrollY > 0);
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2,
			center:true,
        }
    }
})




let viewitems = document.getElementsByClassName("viewitem");
for(i = 0; i < viewitems.length; i++){

    let button = viewitems[i];

    button.addEventListener("click",myfunction)
}




function myfunction(event){

   let button = event.target;

    let content = button.parentElement;

    var title = content.getElementsByClassName("title")[0].innerHTML;

    var cnt = content.getElementsByClassName("contents")[0].innerText;

    var img = content.getElementsByClassName("imgsrc")[0].src;

    console.log(title)

    console.log(cnt)

    console.log(img)
}



