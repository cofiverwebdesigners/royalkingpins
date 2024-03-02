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


function show_fourth_image(){
	//we will show the first image when this is selected.
	var first_image=document.getElementById("first");
	var second_image=document.getElementById("second");
	var third_image=document.getElementById("third");
	var fourth_image=document.getElementById("fourth");
	var first_heading=document.getElementById("first_heading");
	var second_heading=document.getElementById("second_heading");
	var third_heading=document.getElementById("third_heading");
	var fourth_heading=document.getElementById("fourth_heading");
	first_image.style.display="none";
	second_image.style.display="none";
	third_image.style.display="none";
	third_heading.style.display="none";
	second_heading.style.display="none";
	first_heading.style.display="none";
	
	fourth_image.style.display="block";
	fourth_heading.style.display="block";
}


let currentIndex = 0;
let images;
let titles;

let currentIndex2 = 0;
images = document.querySelectorAll('.services img');

titles=document.querySelectorAll('.heading_display h1');






function showImage(index) {
	images.forEach((img, i) => {
	img.style.display = i === index ? 'block' : 'none';
	});
}

function showImage2(index2) {
	titles.forEach((h1, j) => {
	h1.style.display = j === index2 ? 'block' : 'none';
	});
}


function next(){
	currentIndex = (currentIndex + 1) % images.length;
	showImage(currentIndex);
	
	currentIndex2 = (currentIndex2 + 1) % titles.length;
	showImage2(currentIndex2);
}

function prev() {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	showImage(currentIndex);
	
	
	currentIndex2 = (currentIndex2 - 1 + titles.length) % titles.length;
	showImage2(currentIndex2);
}



