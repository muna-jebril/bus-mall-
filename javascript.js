var names = [
    "bag.jpg",
    "banana.jpg",
    "bathroom.jpg",
    "boots.jpg",
    "breakfast.jpg",
    "bubblegum.jpg",
    "chair.jpg",
    "cthulhu.jpg",
    "dog-duck.jpg",
    "dragon.jpg",
    "pen.jpg",
    "pet-sweep.jpg",
    "scissors.jpg",
    "shark.jpg",
    "sweep.png",
    "tauntaun.jpg",
    "unicorn.jpg",
    "usb.gif",
    "water-can.jpg",
    "wine-glass.jpg",
];
var leftImage = document.querySelector('#leftImage');
var rightImage = document.querySelector('#rightImage');
var centerImage=document.querySelector('#centerImage');

var imageSection = document.querySelector('#imagesSection')

// leftImage.src = `imgs/${names[0]}`;
// // leftImage.alt = names[0];
// leftImage.title = names[0];
// console.log (names[0]);

// centerImage.src = `imgs/${names[1]}`;
// centerImage.alt = names[1];
// centerImage.title = names[1];
// console.log (names[1]);

// rightImage.setAttribute('src',`imgs/${names[1]}.jpg`);
// rightImage.setAttribute('alt',names[1]);
// rightImage.setAttribute('title',names[1]);

//(3_1) create constructor function for the goats
function Think(name) {
  this.name = name;
  this.clicks = 0;
  this.views = 0;
  this.imagePath = `imgs/${this.name}`;
  Think.all.push(this);
}
Think.all =[];

//(3_2) instantiate objects for all the goats one shot
for(var i =0; i<names.length; i++) {
  new Think(names[i]);
}

//(4) render 2 random images
var leftimg, rightimg, centerimg
function render () {
   leftimg = Think.all[randomNumber(0,Think.all.length-1)];
  console.log(leftimg);
   rightimg = Think.all[randomNumber(0,Think.all.length-1)];
  console.log(rightimg);
  centerimg = Think.all[randomNumber(0,Think.all.length-1)];
  console.log(centerimg);

  leftImage.setAttribute('src',leftimg.imagePath);
  console.log(leftImage.src,"ggg");
  leftImage.setAttribute('alt',leftimg.name);
  leftImage.setAttribute('title',leftimg.name);
  rightImage.setAttribute('src',rightimg.imagePath);
  rightImage.setAttribute('alt',rightimg.name);
  rightImage.setAttribute('title',rightimg.name);
  centerImage.setAttribute('src',centerimg.imagePath);
  centerImage.setAttribute('alt',centerimg.name);
  centerImage.setAttribute('title',centerimg.name);
}
render();

//(5) add the event listener to render new images
imageSection.addEventListener('click',handleClickOnimg);
var totalClicks =0;
function handleClickOnimg(event) {
while(totalClicks <25 ) {
var x;
console.log(x)
      switch (  x=( leftImage.src !== rightimg.src !==centerimg.src)){
case 1 :
    {if(event.target.id !== 'imagesSection') {
      if(event.target.id === 'leftImage') {
        leftimg.clicks++;
      } else if(event.target.id === 'rightImage') {
        rightimg.clicks++;
      }else if (event.target.id === 'centerImage'){
          centerimg.clicks++;
          console.log(centerimg.clicks);
      }
      totalClicks++;
      leftimg.views++;
      rightimg.views++;}
      render();
    }
  break;
  case 0:
      render();
      break;}
     {
    console.log('more than 5 clicks');
    imageSection.removeEventListener('click',handleClickOnimg);
    render2();
  }
}}

function render2() {
  var ulE1 = document.getElementById('summary');
  for (var i =0; i<Think.all.length ; i++) {
    var liE1 = document.createElement('li');
    liE1.textContent = `${Think.all[i].name} has ${Think.all[i].clicks} clicks and ${Think.all[i].views} views`;
    ulE1.appendChild(liE1);
  }
}



function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
