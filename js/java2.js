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

let currentIndex = 0;
let images;


images = images = document.querySelectorAll('.tiling_images_and_small_heading img');
totalimages=images.length



let touchstartX=0;
let touchendX=0;

function check_swap_direction(){
	if(touchendX < touchstartX){
		console.log("my user has swipped  left")
		console.log(totalimages)
		next()
	}
	else{
		console.log("my user has swipped  right")
		console.log(totalimages)
		prev()
	}
}

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

var bb=document.getElementById("images_holder");
bb.addEventListener("touchstart", (e)=>{
touchstartX=e.changedTouches[0].screenX;
});

bb.addEventListener("touchend", (e)=>{
touchendX=e.changedTouches[0].screenX;
check_swap_direction()
});




//The second service 



