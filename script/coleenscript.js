function showDiv1(event) {
	document.getElementById('jeux').style.display = "block";
	onLoad();
	document.getElementById('musiques').style.display = "none";
	document.getElementById('videos').style.display = "none";
	document.getElementById('livres').style.display = "none";
	var son = document.getElementById('petitesmusiques');
	son.pause();
	var vid = document.getElementById('petitesvideos');
	vid.pause();
};

function showDiv2(event) {
	document.getElementById('jeux').style.display = "none";
	document.getElementById('musiques').style.display = "block";
	document.getElementById('videos').style.display = "none";
	document.getElementById('livres').style.display = "none";
	var vid = document.getElementById('petitesvideos');
	vid.pause();
};

function showDiv3(event) {
	document.getElementById('jeux').style.display = "none";
	document.getElementById('musiques').style.display = "none";
	document.getElementById('videos').style.display = "block";
	document.getElementById('livres').style.display = "none";
	var vid = document.getElementById('petitesvideos');
	vid.load();
	vid.play();
};

function showDiv4(event) {
	document.getElementById('jeux').style.display = "none";
	document.getElementById('musiques').style.display = "none";
	document.getElementById('videos').style.display = "none";
	document.getElementById('livres').style.display = "block";
	var son = document.getElementById('petitesmusiques');
	son.pause();
	var vid = document.getElementById('petitesvideos');
	vid.pause();
};

function closeDiv() {
	document.getElementById('jeux').style.display = "none";
	document.getElementById('musiques').style.display = "none";
	document.getElementById('videos').style.display = "none";
	document.getElementById('livres').style.display = "none";
	var son = document.getElementById('petitesmusiques');
	son.pause();
	var vid = document.getElementById('petitesvideos');
	vid.pause();
};

function lastPage1() {
	var source = document.getElementById('book1').src;
	var page = source.slice(-7,-5);
	console.log(page.charAt(0));
	if (page.charAt(0) == 'e') {
		page = page.slice(1);
	} else {
		page = source.slice(-7,-5);
	};
	nbpage = parseInt(page);
	if (nbpage > 1) {
		nbpage -= 1;
	} else {
		nbpage = 16;
	};
	document.getElementById('book1').src = 'img/livre1/page' + nbpage + '.jpeg';
};

function lastPage2() {
	var source = document.getElementById('book2').src;
	var page = source.slice(-7,-5);
	console.log(page.charAt(0));
	if (page.charAt(0) == 'e') {
		page = page.slice(1);
	} else {
		page = source.slice(-7,-5);
	};
	nbpage = parseInt(page);
	if (nbpage > 1) {
		nbpage -= 1;
	} else {
		nbpage = 17;
	};
	document.getElementById('book2').src = 'img/livre2/page' + nbpage + '.jpeg';
};

function lastPage3() {
	var source = document.getElementById('book3').src;
	var page = source.slice(-7,-5);
	console.log(page.charAt(0));
	if (page.charAt(0) == 'e') {
		page = page.slice(1);
	} else {
		page = source.slice(-7,-5);
	};
	nbpage = parseInt(page);
	if (nbpage > 1) {
		nbpage -= 1;
	} else {
		nbpage = 14;
	};
	document.getElementById('book3').src = 'img/livre3/page' + nbpage + '.jpeg';
};

function lastPage4() {
	var source = document.getElementById('book4').src;
	var page = source.slice(-7,-5);
	console.log(page.charAt(0));
	if (page.charAt(0) == 'e') {
		page = page.slice(1);
	} else {
		page = source.slice(-7,-5);
	};
	nbpage = parseInt(page);
	if (nbpage > 1) {
		nbpage -= 1;
	} else {
		nbpage = 32;
	};
	document.getElementById('book4').src = 'img/livre4/page' + nbpage + '.jpeg';
};

function nextPage1() {
	var source = document.getElementById('book1').src;
	var page = source.slice(-7,-5);
	console.log(page.charAt(0));
	if (page.charAt(0) == 'e') {
		page = page.slice(1);
	} else {
		page = source.slice(-7,-5);
	};
	nbpage = parseInt(page);
	if (nbpage < 16) {
		nbpage += 1;
	} else {
		nbpage = 1;
	};
	document.getElementById('book1').src = 'img/livre1/page' + nbpage + '.jpeg';
};

function nextPage2() {
	var source = document.getElementById('book2').src;
	var page = source.slice(-7,-5);
	console.log(page.charAt(0));
	if (page.charAt(0) == 'e') {
		page = page.slice(1);
	} else {
		page = source.slice(-7,-5);
	};
	nbpage = parseInt(page);
	if (nbpage < 17) {
		nbpage += 1;
	} else {
		nbpage = 1;
	};
	document.getElementById('book2').src = 'img/livre2/page' + nbpage + '.jpeg';
};

function nextPage3() {
	var source = document.getElementById('book3').src;
	var page = source.slice(-7,-5);
	console.log(page.charAt(0));
	if (page.charAt(0) == 'e') {
		page = page.slice(1);
	} else {
		page = source.slice(-7,-5);
	};
	nbpage = parseInt(page);
	if (nbpage < 14) {
		nbpage += 1;
	} else {
		nbpage = 1;
	};
	document.getElementById('book3').src = 'img/livre3/page' + nbpage + '.jpeg';
};

function nextPage4() {
	var source = document.getElementById('book4').src;
	var page = source.slice(-7,-5);
	console.log(page.charAt(0));
	if (page.charAt(0) == 'e') {
		page = page.slice(1);
	} else {
		page = source.slice(-7,-5);
	};
	nbpage = parseInt(page);
	if (nbpage < 32) {
		nbpage += 1;
	} else {
		nbpage = 1;
	};
	document.getElementById('book4').src = 'img/livre4/page' + nbpage + '.jpeg';
};

var audio = document.getElementById("petitesmusiques");
var trlist = ['Son 1', 'Son 2', 'Son 3', 'Son 4', 'Son 5',
			'Son 6', 'Son 7', 'Son 8', 'Son 9', 'Son 10']; 

function playTr() {	
	audio.play();
};

function pauseTr() {
	audio.pause();
};

function nextTr() {
	var source = document.getElementById('track').src;
	var track = source.slice(-6,-4);
	if (track.charAt(0) == '0') {
		track = track.slice(1);
	} else {
		track = source.slice(-6,-4);
	};
	nbsrc = parseInt(track);
	if (nbsrc < 9) {
		nbsrc += 1;
		document.getElementById('track').src = 'media/musique/0' + nbsrc + '.mp3';
		document.getElementById('infoscreen').innerHTML = trlist[nbsrc-1];
	} else if (nbsrc < 10) {
		document.getElementById('track').src = 'media/musique/10.mp3';
		document.getElementById('infoscreen').innerHTML = trlist[9];
	} else {
		nbsrc = 10;
		document.getElementById('track').src = 'media/musique/01.mp3';
		document.getElementById('infoscreen').innerHTML = trlist[0];
	};	
	audio.load();
};

function lastTr() {
	var source = document.getElementById('track').src;
	var track = source.slice(-6,-4);
	if (track.charAt(0) == '0') {
		track = track.slice(1);
	} else {
		track = source.slice(-6,-4);
	};
	nbsrc = parseInt(track);
	if (nbsrc > 1) {
		nbsrc -= 1;
		document.getElementById('track').src = 'media/musique/0' + nbsrc + '.mp3';
		document.getElementById('infoscreen').innerHTML = trlist[nbsrc-1];
	
	} else if (nbsrc > 0) {
		document.getElementById('track').src = 'media/musique/10.mp3';
		document.getElementById('infoscreen').innerHTML = trlist[9];
	};
	audio.load();
};

var imgs = document.querySelectorAll('.cartes');
var main = document.querySelector('#mainimage > img');

for (var i=0; i<imgs.length; i++) {
	imgs[i].addEventListener('click', onClickImage);
}

function onClickImage(event) {

	if (main.src == event.currentTarget.src) {
		document.getElementById('win').style.display = "block";
		setTimeout(resetDisplay, 1500);
		setTimeout(onLoad, 1500);
	} else {
		event.currentTarget.style.opacity = .5;
		document.getElementById('loose').style.display = "block";
		setTimeout(resetDisplay, 1000);
	};
		
};

function resetDisplay() {
	document.getElementById('win').style.display = "none";
	document.getElementById('loose').style.display = "none";
};

function onLoad(event) {

	var values = [];
	for (var i=0; i<imgs.length; i++) {
		imgs[i].style.opacity = 1;
		if (imgs[i]) {
			var nb = Math.floor(Math.random()*52) + 1;
			imgs[i].src = 'img/cartes/'+nb+'.png';		
		};
	}; 
	var nb2 = Math.ceil(Math.random()*9);
	main.src = document.getElementsByClassName('cartes')[nb2].getAttribute('src');
};

var numbers = document.querySelectorAll('.chiffres');

for (var i=0; i<numbers.length; i++) {
	numbers[i].addEventListener('click', soundSelNum);
};

function soundSelNum(event) {
	var sel = event.currentTarget.src;
	var trackNum = sel.slice(-6,-4);
	if (trackNum.charAt(0) == '/') {
		trackNum = trackNum.slice(1);
	} else {
		trackNum = sel.slice(-6,-4);
	};
	nbsrc = parseInt(trackNum);
	console.log(nbsrc);
	document.getElementById('trackjeu').src = 'media/chiffres/' + nbsrc + '.mp3';
	var son = document.getElementById('jeuxSonores');
	son.load();
	son.play();
};




var letters = document.querySelectorAll('.lettres');

for (var i=0; i<letters.length; i++) {
	letters[i].addEventListener('click', soundSelLet);
};

function soundSelLet(event) {
	var sel = event.currentTarget.src;
	var trackNum = sel.slice(-6,-4);
	if (trackNum.charAt(0) == '/') {
		trackNum = trackNum.slice(1);
	} else {
		trackNum = sel.slice(-6,-4);
	};
	nbsrc = parseInt(trackNum);
	console.log(nbsrc);
	document.getElementById('trackjeu').src = 'media/lettres/' + nbsrc + '.mp3';
	var son = document.getElementById('jeuxSonores');
	son.load();
	son.play();
};

function nextVid() {
	var source = document.getElementById('video').src;
	var video = source.slice(-6,-4);
	if (video.charAt(0) == '0') {
		video = video.slice(1);
	} else {
		video = source.slice(-6,-4);
	};
	nbsrc = parseInt(video);
	if (nbsrc < 9) {
		nbsrc += 1;
		document.getElementById('video').src = 'media/videos/0' + nbsrc + '.mp4';
	} else if (nbsrc < 10) {
		document.getElementById('video').src = 'media/videos/10.mp4';
	} else {
		nbsrc = 10;
		document.getElementById('video').src = 'media/videos/01.mp4';
		
	};
	var vid = document.getElementById('petitesvideos');	
	vid.load();
	vid.play();
};

function lastVid() {
	var source = document.getElementById('video').src;
	var video = source.slice(-6,-4);
	if (video.charAt(0) == '0') {
		video = video.slice(1);
	} else {
		video = source.slice(-6,-4);
	};
	nbsrc = parseInt(video);
	if (nbsrc > 1) {
		nbsrc -= 1;
		document.getElementById('video').src = 'media/videos/0' + nbsrc + '.mp4';		
	} else if (nbsrc > 0) {
		document.getElementById('video').src = 'media/videos/10.mp4';
		
	};
	var vid = document.getElementById('petitesvideos');
	vid.load();
	vid.play();
};