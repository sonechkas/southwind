// Слайдер

window.addEventListener("DOMContentLoaded", function () {
	// "use strict";
    let slideIndex = 1,
		slides = document.querySelectorAll(".slider-item"),
		prev = document.querySelector(".prev"),
		next = document.querySelector(".next"),
		dotsWrap = document.querySelector(".slider-dots"),
		dots = document.querySelectorAll(".dot");

	showSlides(slideIndex);
	// Принимала аргумент номер слайда, который нужно показать
	function showSlides(n) {
		// дополнительно делаем проверку чтобы индекс не вышел за пределы
		if (n > slides.length) {
			// Возвращаемся к первому слайду
			slideIndex = 1;
		}
		if (n < 1) {
			// Возвращаемся к последнему слайду
			slideIndex = slides.length;
		}

		slides.forEach((item) => (item.style.display = "none"));
		dots.forEach((item) => item.classList.remove("dot-active"));

		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].classList.add("dot-active");
	}
	function plusSlides(n) {
		showSlides((slideIndex += n));
	}
	function currentSlide(n) {
		showSlides((slideIndex = n));
	}

	prev.addEventListener("click", function () {
		plusSlides(-1);
	});

	next.addEventListener("click", function () {
		plusSlides(1);
	});
	//Создаем событие клика на родителя, используя делегирование событий
	dotsWrap.addEventListener("click", function (event) {
		// перебираем все dot и узнаем на какую именно кликнули
		for (let i = 0; i < dots.length + 1; i++) {
			// проверяем элемент на соответствие и узнаем номер точки
			if (
				event.target.classList.contains("dot") &&
				event.target == dots[i - 1]
			) {
				currentSlide(i);
			}
		}
	});

    //табы

let tab = function () {
    let tabNav = document.querySelectorAll('.txt3'),
        tabContent = document.querySelectorAll('.nomer__first'),
        //создаем переменную, в которой запишем имя активного таба
        tabName;
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav);
    });
    function selectTabNav() {
        //удаляем класс у каждого item 
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
    
};
tab();



//модальное окно 
    const modal = document.getElementById("modal");
	const btn = document.getElementById("open-modal__btn");
	const closeBtn = document.querySelector(".modal__close");

	btn.addEventListener("click", function () {
		modal.classList.add("modal_active");
		closeBtn.addEventListener("click", closeModal);

		function closeModal() {
			modal.classList.remove("modal_active");
			closeBtn.removeEventListener("click", closeModal);
			modal.removeEventListener("click", hideModal);
		}

		modal.addEventListener("click", hideModal);

		//Закрытие при клике 
		function hideModal(event) {
			if (event.target === modal) {
				closeModal();
			}
		}
	});

	//фильтр


let filtr = function () {
    let filtrNav = document.querySelectorAll('.txtf'),
        filtrContent = document.querySelectorAll('.image'),
        //создаем переменную, в которой запишем имя активного таба
        tabName;
    filtrNav.forEach(item => {
        item.addEventListener('click', selectTabNav);
    });
    function selectTabNav() {
        //удаляем класс у каждого item 
        filtrNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        filtrName = this.getAttribute('data-tab-name');
        selectTabContent(filtrName);
    }
    function selectTabContent(filtrName) {
        filtrContent.forEach(item => {
            item.classList.contains(filtrName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
    
};
filtr();

//аккордион

var accord = document.getElementById("accord");
accord.addEventListener("click", function () {
		var content = document.getElementById("acord-cont");
		if (content.classList.contains("hidden")) {
			content.classList.remove("hidden");
		} else {
			content.classList.add("hidden");
		}
	});


//бургер меню

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
	e.preventDefault();
  // Переключаем стили элементов при клике
	popup.classList.toggle("open");
	hamb.classList.toggle("active");
	body.classList.toggle("noscroll");
	renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
	popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
	link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
	popup.classList.remove("open");
	hamb.classList.remove("active");
	body.classList.remove("noscroll");
}


});

