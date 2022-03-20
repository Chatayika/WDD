let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};


  if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

let visit = document.querySelector("#visits");

localStorage.setItem("mytime", Date.now());
let before = Number(window.localStorage.getItem("mytime"));
today = Number(Date.now());


days = Math.round((today - before)/86400000);
if (days !== 0) {
  visit.textContent = `${days} days`;
}
else {
  visit.textContent = `First visit`;
}
