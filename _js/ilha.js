






$( document ).ready(function() {
    

	setInterval("mudaFraseTopo()", 4000);








		$(".fancybox").fancybox();

















});


function mudaFraseTopo(){
	if($("#frase-topo").attr('src')=="_img/frase-praia.png"){

		$('#frase-topo').fadeOut(400, function(){
		    $(this).attr('src','_img/frase-ar.png').bind('onreadystatechange load', function(){
		        if (this.complete) $(this).fadeIn(400);
	      	});
		});

	}else{


		$('#frase-topo').fadeOut(400, function(){
		    $(this).attr('src','_img/frase-praia.png').bind('onreadystatechange load', function(){
		        if (this.complete) $(this).fadeIn(400);
	      	});
		});


	}

	if($("#frase-topo2").attr('src')=="_img/frase-praia2.png"){

		$('#frase-topo2').fadeOut(400, function(){
		    $(this).attr('src','_img/frase-ar2.png').bind('onreadystatechange load', function(){
		        if (this.complete) $(this).fadeIn(400);
	      	});
		});

	}else{


		$('#frase-topo2').fadeOut(400, function(){
		    $(this).attr('src','_img/frase-praia2.png').bind('onreadystatechange load', function(){
		        if (this.complete) $(this).fadeIn(400);
	      	});
		});


	}
}