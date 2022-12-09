$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.js-example-basic-single').select2({
	width: "100%"
});

$.datepicker.setDefaults(
	{
		closeText: 'Закрыть',
		prevText: '',
		currentText: 'Сегодня',
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
			'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
			'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		weekHeader: 'Не',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	});

$('.datepicker1').datepicker({
	changeYear: true
});

$('.tab_selector').on('change', function (e) {
	$('.nav-tabs li a').eq($(this).val()).tab('show');
});


$('.checkbox-car input:checkbox').change(function () {
	if ($(this).is(":checked")) {
		$('.row-car-info').css("display", 'flex');
	} else {
		$('.row-car-info').css("display", 'none');
	}
});

$('.btn-burger').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function (e) {
	e.preventDefault();
	$('.mobile-menu').fadeOut();
});

// show list all
$('.table-enforcement tbody td > .list-enforcement').each(function () {
	if ($(this).find('li').length > 2) {
		$(this).find('li').slice(2).hide();
		$(this).parent('.table-enforcement tbody td').append('<a href="#" class="link-details-list color-accent">Подробнее</a>');
	}
});


$('.link-details-list').on('click', function (e) {
	e.preventDefault();

	var
		$this = $(this),
		content = $(this).parent().find('.list-enforcement li');


	if (!$this.hasClass('trigger')) {
		$this.addClass('trigger');
		$this.html('Скрыть подробности');

		content.slideDown();
	} else {
		$this.removeClass('trigger');
		$this.html('Подробнее');

		content.slice(2).slideUp();
	}
});
// show list all

// hidden list > 8
$('.table-lists-debit > tbody').each(function () {
	if ($(this).find('tr').length > 8) {
		$(this).find('tr').slice(8).hide();
		// $(this).parent('.modal-body').append('<div class="text-center load-more-wrap"><button class="btn btn-default">Загрузить еще</button></div>');
	}

});

	// hidden list > 5
$('.link-toggle').on('click', function (e) {
	e.preventDefault();
	$(this).prev('.table-lists-debit').find('tr:hidden').slice(0, 3).slideDown();

	var onBlock = $(this).prev('.table-lists-debit').find('tr:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});

// активная ссылка меню
$('.menu li a').each(function () {
	var location = window.location.href;
	var link = this.href;
	if (location === link) {
		$(this).addClass('active');
	}
});
// end