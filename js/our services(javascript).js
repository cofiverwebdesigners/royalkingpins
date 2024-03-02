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


images = document.querySelectorAll('.Terrazos_image_container img');
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

var bb=document.getElementById("second_images");
bb.addEventListener("touchstart", (e)=>{
touchstartX=e.changedTouches[0].screenX;
});

bb.addEventListener("touchend", (e)=>{
touchendX=e.changedTouches[0].screenX;
check_swap_direction()
});




//Showcasing all the images in Tilling
let currentIndex2 = 0;
let images2;


images2 = document.querySelectorAll('.tiling_images_and_small_heading img');
console.log(images2.length)
let touchstartX2=0;
let touchendX2=0;

function check_swap_direction2(){
	if(touchendX2 < touchstartX2){
		console.log("my user has swipped  left")
		next2()
	}
	else{
		console.log("my user has swipped  right")
		prev2()
	}
}

function showImage2(index2) {
	images2.forEach((img, i) => {
	img.style.display = i === index2 ? 'block' : 'none';
});
}

function next2(){
	currentIndex2 = (currentIndex2 + 1) % images2.length;
	showImage2(currentIndex2);
}

function prev2() {
	currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
	showImage2(currentIndex2);
}

var bb2=document.getElementById("images_holder");
bb2.addEventListener("touchstart", (e)=>{
touchstartX2=e.changedTouches[0].screenX;
});

bb2.addEventListener("touchend", (e)=>{
touchendX2=e.changedTouches[0].screenX;
check_swap_direction2()
});




//showcasing all images in ward drope 
let currentIndex3 = 0;
let images3;


images3 = document.querySelectorAll('.wardrope_image_container img');

let touchstartX3=0;
let touchendX3=0;

function check_swap_direction3(){
	if(touchendX3 < touchstartX3){
		console.log("my user has swipped  left")
		next3()
	}
	else{
		console.log("my user has swipped  right")
		prev3()
	}
}

function showImage3(index3) {
	images3.forEach((img, i) => {
	img.style.display = i === index3 ? 'block' : 'none';
});
}

function next3(){
	currentIndex3 = (currentIndex3 + 1) % images3.length;
	showImage3(currentIndex3);
}

function prev3() {
	currentIndex3 = (currentIndex3 - 1 + images3.length) % images3.length;
	showImage3(currentIndex3);
}

var bb3=document.getElementById("third_images");
bb3.addEventListener("touchstart", (e)=>{
touchstartX3=e.changedTouches[0].screenX;
});

bb3.addEventListener("touchend", (e)=>{
touchendX3=e.changedTouches[0].screenX;
check_swap_direction3()
});





//showcasing all images in cabros section. 
let currentIndex4 = 0;
let images4;


images4 = document.querySelectorAll('.cabros_image_container img');

let touchstartX4=0;
let touchendX4=0;

function check_swap_direction4(){
	if(touchendX4 < touchstartX4){
		console.log("my user has swipped  left")
		next4()
	}
	else{
		console.log("my user has swipped  right")
		prev4()
	}
}

function showImage4(index4) {
	images4.forEach((img, i) => {
	img.style.display = i === index4 ? 'block' : 'none';
});
}

function next4(){
	currentIndex4 = (currentIndex4 + 1) % images4.length;
	showImage4(currentIndex4);
}

function prev4() {
	currentIndex4 = (currentIndex4 - 1 + images4.length) % images4.length;
	showImage4(currentIndex4);
}

var bb4=document.getElementById("fourth_images");
bb4.addEventListener("touchstart", (e)=>{
touchstartX4=e.changedTouches[0].screenX;
});

bb4.addEventListener("touchend", (e)=>{
touchendX4=e.changedTouches[0].screenX;
check_swap_direction4()
});



// For click events


var bb5=document.getElementById("second_images");


bb5.addEventListener("click", (e) => {
    next();
});

// For click events in reverse order
var bb6=document.getElementById("images_holder");
bb6.addEventListener("click", (e) => {
    prev2();
});

var bb7=document.getElementById("third_images");
bb7.addEventListener("click", (e) => {
    next3();
});

var bb8=document.getElementById("fourth_images");
bb8.addEventListener("click", (e) => {
    prev4();
});