window.onload = function(){
	var b = document.body.innerHTML;
	document.body.innerHTML = b + "<div style='position: absolute;max-width: 100%; width: 100%; border: none; height: 0vh; top: 0px; left: 0px;'><div class='toastMe'>TESTE</div></div>";
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
	var toastMeCss = ''
	if (/android/i.test(userAgent)) {
    	toastMeCss = '.toastMe { pointer-events:none; max-width: 95%;font-family: arial; font-size: 14px; overflow-wrap: break-word; position: relative;	margin: auto;	padding: 12px 14px;	z-index: 1000;	background: rgba(97,97,97, .95);	color: #fff;	text-shadow: 0px 0px 4px black;	text-align:center;	border-radius: 25px;	border: 1 solid rgba(50,50,50,1);	transition: display 1.5s; }';
	}
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    	toastMeCss = '.toastMe { pointer-events:none; max-width: 95%;font-family: arial; font-size: 14px; overflow-wrap: break-word; position: relative;	margin: auto;	padding: 12px 14px;	z-index: 1000; background-color: rgba(0, 0, 0, 0.8);	text-align:center; border-radius: 6px; color: #fff; transition: display 0.8s;}';
	}
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = toastMeCss + '.toastTop {top: 8vh} .toastCenter {top: 45vh;} .toastBot {top: 82vh;} .toastHide { display: none;} .animated {-webkit-animation-duration: 1s;  animation-duration: 1s;  -webkit-animation-fill-mode: both;  animation-fill-mode: both;}@-webkit-keyframes fadeIn {  0% {    opacity: 0;  }  100% {    opacity: 1;  }}@keyframes fadeIn {  0% {    opacity: 0;  }  100% {    opacity: 1;  }}.fadeIn {  -webkit-animation-name: fadeIn;  animation-name: fadeIn;}@-webkit-keyframes fadeOut {  0% {    opacity: 1;  }  100% {    opacity: 0;  }}@keyframes fadeOut {  0% {   opacity: 1;}  100% {    opacity: 0;  }}.fadeOut {  -webkit-animation-name: fadeOut;  animation-name: fadeOut;}';	
	document.getElementsByTagName('head')[0].appendChild(style);
	var a = document.getElementsByClassName("toastMe");
	a[0].classList.add("toastHide", "animated", "fadeOut");
};

function toastMe(msg, time, position) {
	var a = document.getElementsByClassName("toastMe");
	a[0].classList.remove("toastTop", "toastCenter", "toastBot");
	a[0].innerHTML = msg;
    a[0].style.width = (7*a[0].textContent.length) + 'px';
    a[0].style.maxWidth = '90%';	
	a[0].classList.add("toast"+position);
	a[0].classList.remove("toastHide");
	a[0].classList.replace("fadeOut", "fadeIn");	
	setTimeout(function(){a[0].classList.replace("fadeIn", "fadeOut");}, time);
}
