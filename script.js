var images;


images = ['https://udupitourism.com/img/slider/boathouse.jpg', 'https://udupitourism.com/img/slider/slider_2.jpg', 'https://udupitourism.com/img/slider/slider_6.jpg'];
let element_carouselImg = document.getElementById('carouselImg');
element_carouselImg.setAttribute("src", images[0]);


document.getElementById('nextBtn').addEventListener('click', (event) => {
  let element_carouselImg2 = document.getElementById('carouselImg');
  images.unshift(images.pop());
  element_carouselImg2.setAttribute("src", images[0]);

});

document.getElementById('prevBtn').addEventListener('click', (event) => {
  let element_carouselImg3 = document.getElementById('carouselImg');
  images.unshift(images.pop());
  element_carouselImg3.setAttribute("src", images[0]);

});