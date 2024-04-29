gsap.from(".pictures", {y: 30, opacity: 0, duration: 3})
gsap.from(".nav", {x: -30, duration: 1, opacity: 0, delay: 1})
//gsap.from(".order", {y: 30, duration: 1, delay: 3, opacity: 0})
//gsap.from("h1, .main", {y: 30, opacity: 0, duration: 3, delay: 1})

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





function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }




let firstIndex = 0;
function automaticSlide() {

  setTimeout(automaticSlide, 5000);

  let pics;
  const img = document.querySelectorAll("#pictures");
  for(pics = 0; pics < img.length;pics++) {
    img[pics].style.display="none";
    
  }
  firstIndex++;
  if (firstIndex > img.length) {
    firstIndex = 1;
  }
  img[firstIndex - 1].style.display="block";
}

automaticSlide();



const back = document.querySelector(".previous");
const next = document.querySelector(".next");

const photos = ["conceptstore.jpg", "ipakyulibank.jpg", "basri.jpg", "safiyabake.jpg"];

console.log(photos[0]);

let i = 0; 

next.addEventListener("click", () => {
i++;
if (i > photos.length - 1) {
    i = 0;
}

document.querySelector(".pictures").src = photos[i];
})

back.addEventListener("click", () => {
i--;
if (i < 0) {
    i = photos.length - 1;
}
document.querySelector(".pictures").src = photos[i];
})



