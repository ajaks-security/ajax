$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");   
    $(this).removeClass("idle").addClass("active");
	});
});

$(function() {
	$(".btn-signup").click(function() {
  $(".nav").toggleClass("nav-up");
  $(".form-signup-left").toggleClass("form-signup-down");
  $(".success").toggleClass("success-left"); 
  $(".frame").toggleClass("frame-short");
	});
});

$(function() {
    $(".btn-logout").click(function() {
        $(".nav").toggleClass("nav-up");
        $(".form-signup-left").toggleClass("btn-logout");
        $(".frame").toggleClass("frame-short");
    });
});

$(function() {
	$(".btn-signin").click(function() {
  $(".btn-animate").toggleClass("btn-animate-grow");
  $(".welcome").toggleClass("welcome-left");
  $(".cover-photo").toggleClass("cover-photo-down");
  $(".frame").toggleClass("frame-short");
  $(".profile-photo").toggleClass("profile-photo-down");
  $(".btn-goback").toggleClass("btn-goback-up");
  $(".forgot").toggleClass("forgot-fade");
	});
});

$(function() {
    $(".btn-signin").click(function() {
        var password = $("input[name='password']").val(); // Получаем значение поля пароля
        var password = $("input[name='username']").val(); // Получаем значение поля пароля
        if (password === "12345")
        { // Проверяем пароль
            $(".welcome").text("Добрый день, Григорий!"); // Изменяем текст приветствия
            $(".btn-goback").attr("href", "information.html"); // Устанавливаем ссылку на кнопку "Перейти в личный кабинет"
            $(".btn-goback").text("Перейти в личный кабинет"); // Устанавливаем текст кнопки
            $(".btn-goback").show(); // Показываем кнопку "Перейти в личный кабинет"
            $(".btn").hide(); // Скрываем кнопку "Авторизация"
        } else {
            alert("Номер счёта или пароль неверный"); // Выводим сообщение об ошибке
            location.reload(); // Перезагружаем страницу
        }
    });
});

