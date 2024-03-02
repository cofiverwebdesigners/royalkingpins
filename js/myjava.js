function showmenu(){
	var mynav=document.getElementById("mynav");
	var hambagger=document.getElementById("ham");
	var close=document.getElementById("close");
	var image=document.getElementById("felo");
	mynav.style.display="block";
	hambagger.style.display="none";
	close.style.display="block";
}


function hidemenu(){
	var mynav=document.getElementById("mynav");
	var hambagger=document.getElementById("ham");
	var close=document.getElementById("close");
	var image=document.getElementById("felo");
	mynav.style.display="none";
	hambagger.style.display="block";
	close.style.display="none";
}

function show_first_image(){
	//we will show the first image when this is selected.
	var first_image=document.getElementById("first");
	var second_image=document.getElementById("second");
	var third_image=document.getElementById("third");
	var first_heading=document.getElementById("first_heading");
	var second_heading=document.getElementById("second_heading");
	var third_heading=document.getElementById("third_heading");
	first_image.style.display="block";
	
	second_image.style.display="none";
	third_image.style.display="none";
	third_heading.style.display="none";
	second_heading.style.display="none";
	first_heading.style.display="block";
	
	
}

function show_second_image(){
	//we will show the first image when this is selected.
	var first_image=document.getElementById("first");
	var second_image=document.getElementById("second");
	var third_image=document.getElementById("third");
	var first_heading=document.getElementById("first_heading");
	var second_heading=document.getElementById("second_heading");
	var third_heading=document.getElementById("third_heading");
	first_image.style.display="none";
	second_image.style.display="block";
	third_image.style.display="none";
	third_heading.style.display="none";
	second_heading.style.display="block";
	first_heading.style.display="none";
}

function show_third_image(){
	//we will show the first image when this is selected.
	var first_image=document.getElementById("first");
	var second_image=document.getElementById("second");
	var third_image=document.getElementById("third");
	var first_heading=document.getElementById("first_heading");
	var second_heading=document.getElementById("second_heading");
	var third_heading=document.getElementById("third_heading");
	first_image.style.display="none";
	second_image.style.display="none";
	third_image.style.display="block";
	third_heading.style.display="block";
	second_heading.style.display="none";
	first_heading.style.display="none";
}
let currentIndex = 0;
let images;


images = document.getElementsById("images_holder img");
totalimages=length(images)



let touchstartX=0;
let touchendX=0;

function check_swap_direction(){
	if(touchendX < touchstartX){
		console.log("my user has swipped  left")
		console.log(totalimages)
	}
	else{
		console.log("my user has swipped  right")
		console.log(totalimages)
	}
}

var bb=document.getElementById("images_holder");
bb.addEventListener("touchstart", (e)=>{
touchstartX=e.changedTouches[0].screenX;
});

bb.addEventListener("touchend", (e)=>{
touchendX=e.changedTouches[0].screenX;
check_swap_direction()
});




function showImage(index) {
	images.forEach((img, i) => {
	img.style.display = i === index ? 'block' : 'none';
});
}

function next(){
	total_images=images.length;
	console.log("we have "+total_images+ " images")
	currentIndex = (currentIndex + 1) % images.length;
	showImage(currentIndex);
	console.log("This is image number "+ currentIndex)
}

function prev() {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	showImage(currentIndex);
}
