const imgArray = ["1", "2"];
const random = Math.floor(Math.random() * imgArray.length) + 1;
console.log(random);
document.body.style.backgroundImage = `url(my-moment/img/${random}.gif)`;
