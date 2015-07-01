$(function() {
	//菜单栏手风琴效果
	var tabs_i = -1;
	$('.vtitle').click(function(){
		var _self = $(this);
		var j = $('.vtitle').index(_self); 
		var rotate = $(":focus .glyphicon-menu-down");
		if(rotate.hasClass("rotate")){
			rotate.removeClass("rotate");
		}else{
			if($(".glyphicon-menu-down").hasClass("rotate")){
				$(".glyphicon-menu-down").removeClass("rotate");
			}
			rotate.addClass("rotate");
		}
		
		
		if(tabs_i == j){ 
			$('.vcon').eq(tabs_i).collapse("toggle");
			return false;
		}
		tabs_i = j;
		$('.vcon').collapse("hide");
		
	});
	//
	$('#myTab a').click(function (e) {
	  	e.preventDefault();
	  	var href = $(this).attr('href');
	  	var tabId = $(this).attr('data-tab');
	  	$(document).scrollTop($(href).offset().top);
	  	$("#feature-tab a[href=#"+tabId+"]").tab('show');
	})
	//工具提示
	$('[data-toggle="tooltip"]').tooltip();
	//弹出框
	$('[data-toggle="popover"]').popover();
	//改变按钮状态
	$(".myButton").on("click", function () {
		var $btn = $(this);
		$btn.button("loading");
	    // business logic...
	    setTimeout(function () {$btn.button("reset");},2000);
	})
	$('#myStateButton').on('click', function () {
		$(this).button('complete') // button text will be "finished!"
	})
	$('#myStateButton2').on('click', function () {
		$(this).button('toggle') // button text will be "finished!"
	})
	$('.content').on("click", "button", function () {
        $('#full-width .modal-header .modal-title').empty().text($(this).text());
        $('#full-width').modal();
    });
    $('.content2').on("click", "button", function () {
        $('#full-width2 .modal-header .modal-title').empty().text($(this).text());
        $('#full-width2').modal();
    });
});
