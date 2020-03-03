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


function Think(name) {
  this.name = name;
  this.clicks = 0;
  this.views = 0;
  this.imagePath = `imgs/${this.name}`;
  Think.all.push(this);
}
Think.all =[];

for(var i =0; i<names.length; i++) {
  new Think(names[i]);
}

var leftimg, rightimg, centerimg
function render () {

   leftimg = Think.all[randomNumber(0,Think.all.length-1)];
   rightimg = Think.all[randomNumber(0,Think.all.length-1)];
  centerimg = Think.all[randomNumber(0,Think.all.length-1)];
while((leftimg ===centerimg) || (leftimg === rightimg) ||(centerimg === rightimg))
{
render();
}
  leftImage.setAttribute('src',leftimg.imagePath);
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

imageSection.addEventListener('click',handleClickOnimg);
var totalClicks =0;
function handleClickOnimg(event) {
if(totalClicks <25 ) {
  // while(leftimg === centerimg || leftimg === rightimg || rightimg === centerimg || rightimg === leftimg)  

  // {

  //   render();
  // }
  
  
    if(event.target.id !== 'imagesSection') {
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
      console.log(totalClicks);
    }else
  {
    console.log('more than 25 clicks');
    imageSection.removeEventListener('click',handleClickOnimg);
    render2();
  }}


function render2() {
  var ulE1 = document.getElementById('summary');
  for (var i =0; i<Think.all.length ; i++) {
    var liE1 = document.createElement('li');
    liE1.textContent = `${(Think.all[i].name.split(".",1))} has ${Think.all[i].clicks} clicks and ${Think.all[i].views} views`;
    ulE1.appendChild(liE1);
  }
}



function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
