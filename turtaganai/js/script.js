
$(document).ready(function(){
//Главный слайдер на главной
	var $slider = $('._header_main_slider').slick({
			dots: true	
		});
		var bgs = [
		'fon1',   //фон при переходе на 1 слайдер
		'fon_slider_1', //фон при переходе на 2 слайдер
		'fon_slider_2',  //фон при переходе на 3 слайдер
		'fon_slider_3',  //фон при переходе на 4 слайдер
		'fon_slider_4',  //фон при переходе на 5 слайдер
		'fon_slider_5',  //фон при переходе на 6 слайдер
		// .....
		];

		$slider.on('afterChange', function(e, slick, index) {
		$('._header').css('background-image', 'url(http://nikitenkoprojects.ru/portfolio/tur/img/bg/' + bgs[index] +   '.jpg)');;
		});
	//Слайдер с отзывами на главной	
	$('._reviews_slider').slick({
			dots: true
		});	
		
  	//Мобильное меню
  	$('.navbar-toggle').on('click', function(event) {
		event.preventDefault();
		$('._header_top_menu ul').slideToggle();
				
	});
	// Отправка форм
	$("._modacallback, ._form_block_callback, ._form_register, ._spec_tur_form").submit(function() {
		var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: th.serialize()
			}).done(function() {
				$(this).find("input").val("");
				$('#Modacallback, #myModa5').modal('hide');
				setTimeout(function() {
					$('#Modalthank').modal('show');
					th.trigger("reset");
				}, 500);
			});
		return false;
	});
	$("#main_menu").on("click","li:last-child a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		console.log('dfsdf');
		event.preventDefault();
		
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
	
	
	//Изменение текста(показать-скрыть)
	$('._turinfo_faq p').click(function(){
    var $this = $(this).find('span:nth-child(2)');
    $this.toggleClass('SeeMore2');
    if($this.hasClass('SeeMore2')){
        $this.text('(скрыть)');         
    } else {
        $this.text('(показать)');
    }
	});
	//Слайдер на странице тура
	$('._turinfo_slider').slick({
	});
	$('._blog_list_slider').slick({
			dots: false
	});
	//Кнопка показать все
	$('.loadMore').loadMoreResults({
    displayedItems: 1,
    button: {
      'class': 'btn-load-more',
      'text': 'ПОКАЗАТЬ ВСЕ'
    }
  	});
	//Показать больше постов в блоге
	$('._load_more_blog').loadMoreResults({
    displayedItems: 2,
    button: {
      'class': 'btn-load-more',
      'text': 'ПОКАЗАТЬ ВСЕ'
    }
  	});
	  if(window.matchMedia('(max-width: 768px)').matches)
	{
	  $('._load_more_blog').loadMoreResults({
	    displayedItems: 1
	  });
	}
	//Показать больше в списке туров
	$('._tur_list .loadMore').loadMoreResults({
    displayedItems: 2,
    button: {
      'class': 'btn-load-more',
      'text': 'ПОКАЗАТЬ ВСЕ'
    }
  	});
  	if(window.matchMedia('(max-width: 768px)').matches)
	{
	  $('._tur_list .loadMore').loadMoreResults({
	    displayedItems: 1
	  });
	}
	
  	//FAQ
	$('._turinfo_faq').collapsible();
  

});
window.FontAwesomeConfig = {
    searchPseudoElements: true
}

