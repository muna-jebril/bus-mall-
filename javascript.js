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
var centerImage = document.querySelector('#centerImage');

var imageSection = document.querySelector('#imagesSection')
var product = [];
var tClick = [];
var total = [];
var totalView = 0;

//Creating constrctor 
function Think(name) {
  this.name = name;
  this.clicks = 0;
  this.views = 0;
  this.imagePath = `imgs/${this.name}`;
  Think.all.push(this);
  product.push(this.name);
  console.log(product);




}
Think.all = [];
//using the local stronge
function saveValues() {
  localStorage.setItem("Click", totalClicks);
  localStorage.setItem("views", totalView);
  var imgString = JSON.stringify(Think.all);

  localStorage.setItem('ALL', imgString);



}


function getValues() {
  localStorage.getItem("clicks");
  localStorage.getItem("views");
  var imgString = localStorage.getItem("imgs");
  if (imgString) {
    Think.all = JSON.parse(imgString);
    render();
  }




}


for (var i = 0; i < names.length; i++) {
  new Think(names[i]);
}
function resluts() {
  for (var d = 0; d < names.length; d++) {
    
    tClick.push(Think.all[d].clicks);
    console.log("aaaa", tClick);
    total.push(Think.all[d].views);
    console.log("ss", total);

  }
}
var Prev = [];
//function to check  if the imgs are the same 
function check() {
  while ((leftimg === centerimg) || (leftimg === rightimg) || (centerimg === rightimg)) {
    render();

    console.log("check funaction");
  }
}

var leftimg, rightimg, centerimg;
//genrating the output and make sure that their is no imgs are the same and even shown agine in the next ittertion 
function render() {

  leftimg = Think.all[randomNumber(0, Think.all.length - 1)];
  rightimg = Think.all[randomNumber(0, Think.all.length - 1)];
  centerimg = Think.all[randomNumber(0, Think.all.length - 1)];
  while ((leftimg === centerimg) || (leftimg === rightimg) || (centerimg === rightimg)) {

    render();
  }
  console.log(Prev.includes(leftimg))

  while (Prev.includes(leftimg)) {
    console.log("it`s agine left")
    check();

    leftimg = Think.all[randomNumber(0, Think.all.length - 1)];
          while((leftimg === centerimg) || (leftimg === rightimg) ||(centerimg === rightimg)  )
    {
      render();
    }
    check();
  }


  console.log(Prev.includes(rightimg))
  while (Prev.includes(rightimg)) {
    check();

    rightimg = Think.all[randomNumber(0, Think.all.length - 1)];
    console.log("it`s agine right");
    while ((leftimg === centerimg) || (leftimg === rightimg) || (centerimg === rightimg)) {
      render();
    }
    check();
  }
  console.log(Prev.includes(centerimg))

  while (Prev.includes(centerimg)) {
    check();

    centerimg = Think.all[randomNumber(0, Think.all.length - 1)];
    console.log("it`s center agine")
    while ((leftimg === centerimg) || (leftimg === rightimg) || (centerimg === rightimg)) {
      render();
    }
    check();
  }
  Prev.push(leftimg);
  Prev.push(rightimg);
  Prev.push(centerimg);
  while (Prev.length > 3) {
    Prev.shift();
  }

  leftImage.setAttribute('src', leftimg.imagePath);
  leftImage.setAttribute('alt', (leftimg.name.split(".", 1)));
  leftImage.setAttribute('title', (leftimg.name.split(".", 1)));
  rightImage.setAttribute('src', rightimg.imagePath);
  rightImage.setAttribute('alt', (rightimg.imagePath.split(".", 1)));
  rightImage.setAttribute('title', (rightimg.imagePath.split(".", 1)));
  centerImage.setAttribute('src', centerimg.imagePath);
  centerImage.setAttribute('alt', (centerimg.imagePath.split(".", 1)));
  centerImage.setAttribute('title', (centerimg.imagePath.split(".", 1)));
}
render();
imageSection.addEventListener('click', handleClickOnimg);
var totalClicks = 0;
function handleClickOnimg(event) {
  totalView++;

  saveValues();
  getValues();
  if (totalClicks < 25) {


    if (event.target.id !== 'imagesSection') {
      if (event.target.id === 'leftImage') {
        leftimg.clicks++;



      } else if (event.target.id === 'rightImage') {
        rightimg.clicks++;
      } else if (event.target.id === 'centerImage') {
        centerimg.clicks++;
        console.log(centerimg.clicks);
      }
      totalClicks++;
      leftimg.views++;
      rightimg.views++;

    }

    render();
    console.log(totalClicks);


  } else {
    resluts();
    console.log('more than 25 clicks');
    for (var g = 0; i < names.length; g++) {
      tClick.push(Think.all[g].clicks);
      console.log("val", tClick);
    }
    imageSection.removeEventListener('click', handleClickOnimg);
    render2();
  }
}
///showing the output
function render2() {
  var ulE1 = document.getElementById('summary');
  for (var i = 0; i < Think.all.length; i++) {
    var liE1 = document.createElement('li');
    liE1.textContent = `${Think.all[i].name} has ${Think.all[i].clicks} clicks and ${Think.all[i].views} views`;
    ulE1.appendChild(liE1);



    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: product,
        datasets: [{
          label: "# of Clicks",
          data: tClick,
          backgroundColor:
            'rgba(255, 99, 132, 0.2)',


          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1


        }, {
          label: " # of Views",
          data: total,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'],
        },],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }

      }
    });
  }
}
//the randon function 

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}