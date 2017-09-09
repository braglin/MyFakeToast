$("document").ready(function(){
	var style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = '.toastMe { position: absolute;	width: 80vw;	bottom: 10vh;	margin-left: 6vw;	margin-right:10vw;	padding: 1em;	z-index: 1000;	box-shadow: 1px 1px 25px black;	background: rgba(50,50,50, .8);	color: #fff;	text-shadow: 0px 0px 4px black;	text-align:center;	border-radius: 500px;	border: 1 solid rgba(50,50,50,1);	transition: display 1.5s; } .toastHide { display: none;} .animated {-webkit-animation-duration: 1s;  animation-duration: 1s;  -webkit-animation-fill-mode: both;  animation-fill-mode: both;}@-webkit-keyframes fadeIn {  0% {    opacity: 0;  }  100% {    opacity: 1;  }}@keyframes fadeIn {  0% {    opacity: 0;  }  100% {    opacity: 1;  }}.fadeIn {  -webkit-animation-name: fadeIn;  animation-name: fadeIn;}@-webkit-keyframes fadeOut {  0% {    opacity: 1;  }  100% {    opacity: 0;  }}@keyframes fadeOut {  0% {   opacity: 1;}  100% {    opacity: 0;  }}.fadeOut {  -webkit-animation-name: fadeOut;  animation-name: fadeOut;}';	
	document.getElementsByTagName('head')[0].appendChild(style);
	$(".toastMe").addClass("toastHide");
});

function toastMe(msg, time) {
	$(".toastMe").html(msg);	
	$(".toastMe").removeClass("toastHide");
	$(".toastMe").removeClass("animated fadeOut");
	$(".toastMe").addClass("animated fadeIn");
	setTimeout(function(){$(".toastMe").removeClass("animated fadeIn");$(".toastMe").addClass("animated fadeOut");}, time);
}
