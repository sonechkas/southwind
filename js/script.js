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
// filterSelection("all");
// var allButton = document.getElementById("all");
// let	filtr1Button = document.getElementById("filtr1");
// let	filtr2Button = document.getElementById("filtr2");
// let	filtr3Button = document.getElementById("filtr3");

// allButton.onclick = filterSelection("all");
// filtr1Button.onclick = filterSelection("first");
// filtr2Button.onclick = filterSelection("second");
// filtr3Button.onclick = filterSelection("third");


// function filterSelection(c) {
// 	var x, i;
//     x = document.getElementsByClassName("image");
//     if (c == "all") {c = ""};
//   // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
//     for (i = 0; i < x.length; i++) {
// 		w3RemoveClass(x[i], "show");
// 		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
// 	}
	
// }


// console.log('fdgdfg');


// let listt = document.querySelectorAll(".nomertxtf .txtf");
// console.log('fdgdfg');

// allButton.addEventListener("click", function(){
// 	if (listt[0].classList.lenght == 1) {
// 		for (i == 0; i < 4; i++) {
// 			if (listt[i].classList.lenght == 2) {
// 				listt[i].classList.remove("active");
// 			}
// 		};
// 		listt[0].classList.add("active");
// 	}
// })

// filtr1Button.addEventListener("click", function(){
// 	if (listt[1].classList.lenght == 1) {
// 		for (i == 0; i < 4; i++) {
// 			if (listt[i].classList.lenght == 2) {
// 				listt[i].classList.remove("active");
// 			}
// 		};
// 		listt[1].classList.add("active");
// 	}
// })

// filtr2Button.addEventListener("click", function(){
// 	if (listt[2].classList.lenght == 1) {
// 		for (i == 0; i < 4; i++) {
// 			if (listt[i].classList.lenght == 2) {
// 				listt[i].classList.remove("active");
// 			}
// 		};
// 		listt[2].classList.add("active");
// 	}
// })

// filtr3Button.addEventListener("click", function(){
// 	if (listt[3].classList.lenght == 1) {
// 		for (i == 0; i < 4; i++) {
// 			if (listt[i].classList.lenght == 2) {
// 				listt[i].classList.remove("active");
// 			}
// 		};
// 		listt[3].classList.add("active");
// 	}
// })


// Показать отфильтрованные элементы
// function w3AddClass(element, name) {
// 	var i, arr1, arr2;
// 	arr1 = element.className.split(" ");
// 	arr2 = name.split(" ");
// 	for (i = 0; i < arr2.length; i++) {
// 		if (arr1.indexOf(arr2[i]) == -1) {
// 			element.className += " " + arr2[i];
// 		}	
// 	}
// }
    
// // Скрыть элементы, которые не выбраны
// function w3RemoveClass(element, name) {
// 	var i, arr1, arr2;
// 	arr1 = element.className.split(" ");
// 	arr2 = name.split(" ");
// 	for (i = 0; i < arr2.length; i++) {
// 		while (arr1.indexOf(arr2[i]) > -1) {
// 			arr1.splice(arr1.indexOf(arr2[i]), 1);
// 		}
// 	}
// 	element.className = arr1.join(" ");
// }

// var btnContainer = document.getElementById("nomertxtf");
// var btns = document.getElementsByClassName("txtf");
// for (var i = 0; i < btns.length; i++) {
// 	btns[i].addEventListener("click", function() {
// 		var current = document.getElementsByClassName("active");
// 		current[0].className = current[0].className.replace(" active", "");
// 		this.className += " active";
// 	});
// }

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


//accordion();

});

