$("#showToast").on('click', function (){
				toastMe("Hi! I'm a toast!", 2000);
});

$("#showToastFA").on('click', function (){
	toastMe('<i class="fa fa-cog fa-spin fa-3x fa-fw"></i>', 3000);
});