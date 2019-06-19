/*eslint-env browser*/

var startButton = document.querySelector('p + div');
var intro = document.querySelector('body > div > div');
var gradient = document.querySelector('body > div');
var body = document.querySelector('body');
var aside = document.querySelector('aside');
var asideButton = document.querySelector('#asideButton');
var asideDivOne = document.querySelector('aside > div.empty:nth-of-type(1)');
var asideDivTwo = document.querySelector('aside > div.empty:nth-of-type(2)');
var asideDivThree = document.querySelector('aside > div.empty:nth-of-type(3)');
var asideDivFour = document.querySelector('aside > div.empty:nth-of-type(4)');
var asideDivFive = document.querySelector('aside > div.empty:nth-of-type(5)');
var fullStoryButton = document.querySelector('body > div:nth-of-type(3)');
var jassenPlaceholder = document.querySelector('figure > img:nth-of-type(1)');
var hekkenPlaceholder = document.querySelector('figure > img:nth-of-type(2)');
var gebouwPlaceholder = document.querySelector('figure > img:nth-of-type(3)');
var jasjesLeegPlaceholder = document.querySelector('figure > img:nth-of-type(4)');
var artsenPlaceholder = document.querySelector('figure > img:nth-of-type(5)');
var articleWrapper = document.querySelector('body > article');
var articleOne = document.querySelector('article > article:nth-of-type(1)');
var articleTwo = document.querySelector('article > article:nth-of-type(2)');
var articleThree = document.querySelector('article > article:nth-of-type(3)');
var articleFour = document.querySelector('article > article:nth-of-type(4)');
var articleFive = document.querySelector('article > article:nth-of-type(5)');
var articleSix = document.querySelector('article > article:nth-of-type(6)');
var asidePOne = document.querySelector('aside > p:nth-of-type(1)');
var asidePTwo = document.querySelector('aside > p:nth-of-type(2)');
var asidePThree = document.querySelector('aside > p:nth-of-type(3)');
var asidePFour = document.querySelector('aside > p:nth-of-type(4)');
var asidePFive = document.querySelector('aside > p:nth-of-type(5)');


var hideIntro = function() {
    intro.classList.add('goDown');
    gradient.classList.add('goAway');
    body.classList.add('emptyBackground');
    body.classList.remove('originalImage');
    aside.style.right = "-150px";
    asideButton.style.right = "0px";
}

startButton.addEventListener('click', hideIntro);

var openAside = function() {
    aside.classList.toggle('openAside');
    asideButton.classList.toggle('openButton');
}

asideButton.addEventListener('click', openAside);





var dragDivOne = function() {
    jassenPlaceholder.classList.remove('invisible');
    asideDivOne.classList.add('invisible');
    jassenPlaceholder.classList.add('blinking');
    asidePOne.classList.add('invisible');
}

asideDivOne.addEventListener('drag', dragDivOne);

var dragDivOneEnd = function() {
    jassenPlaceholder.classList.remove('blinking');
    jassenPlaceholder.src="Images/Jasjes.png";
    aside.classList.toggle('openAside');
    asideButton.classList.toggle('openButton');
    articleWrapper.style.bottom = "-1614px";
    articleOne.classList.add('articleZichtbaar');
    asideDivTwo.classList.remove('invisible');
    asideDivThree.classList.remove('invisible');
    asidePTwo.classList.remove('invisible');
    asidePThree.classList.remove('invisible');
}

asideDivOne.addEventListener('dragend', dragDivOneEnd);




var dragDivTwo = function() {
    hekkenPlaceholder.classList.remove('invisible');
    asideDivTwo.classList.add('invisible');
    hekkenPlaceholder.classList.add('blinking');
    asidePTwo.classList.add('invisible');
}

asideDivTwo.addEventListener('drag', dragDivTwo);

var dragDivTwoEnd = function() {
    hekkenPlaceholder.classList.remove('blinking');
    hekkenPlaceholder.src="Images/Hekken.png";
    aside.classList.toggle('openAside');
    asideButton.classList.toggle('openButton');
    articleWrapper.style.bottom = "-1330px";
    articleOne.classList.remove('articleZichtbaar');
    articleTwo.classList.add('articleZichtbaar');
}

asideDivTwo.addEventListener('dragend', dragDivTwoEnd);




var dragDivThree = function() {
    gebouwPlaceholder.classList.remove('invisible');
    asideDivThree.classList.add('invisible');
    gebouwPlaceholder.classList.add('blinking');
    asidePThree.classList.add('invisible');
}

asideDivThree.addEventListener('drag', dragDivThree);

var dragDivThreeEnd = function() {
    gebouwPlaceholder.classList.remove('blinking');
    gebouwPlaceholder.src="Images/Vlag%20gebouw.png";
    aside.classList.toggle('openAside');
    asideButton.classList.toggle('openButton');
    articleWrapper.style.bottom = "-1000px";
    articleTwo.classList.remove('articleZichtbaar');
    articleThree.classList.add('articleZichtbaar');
    asideDivFour.classList.remove('invisible');
    asidePFour.classList.remove('invisible');
}

asideDivThree.addEventListener('dragend', dragDivThreeEnd);




var dragDivFour = function() {
    jasjesLeegPlaceholder.classList.remove('invisible');
    asideDivFour.classList.add('invisible');
    jasjesLeegPlaceholder.classList.add('blinking');
    asidePFour.classList.add('invisible');
}

asideDivFour.addEventListener('drag', dragDivFour);

var dragDivFourEnd = function() {
    jasjesLeegPlaceholder.src="Images/Jasjes_leeg.png";
    aside.classList.toggle('openAside');
    asideButton.classList.toggle('openButton');
    articleWrapper.style.bottom = "-640px";
    articleThree.classList.remove('articleZichtbaar');
    articleFour.classList.add('articleZichtbaar');
    asideDivFive.classList.remove('invisible');
    asidePFive.classList.remove('invisible');
}

asideDivFour.addEventListener('dragend', dragDivFourEnd);




var dragDivFive = function() {
    jasjesLeegPlaceholder.classList.remove('blinking');
    jasjesLeegPlaceholder.classList.add('invisible');
    artsenPlaceholder.classList.remove('invisible');
    asideDivFive.classList.add('invisible');
    artsenPlaceholder.classList.add('blinking');
    asidePFive.classList.add('invisible');
}

asideDivFive.addEventListener('drag', dragDivFive);

var dragDivFiveEnd = function() {
    artsenPlaceholder.classList.remove('blinking');
    artsenPlaceholder.src="Images/Artsen.png";
    aside.classList.toggle('openAside');
    asideButton.classList.toggle('openButton');
    articleWrapper.style.bottom = "-280px";
    articleFour.classList.remove('articleZichtbaar');
    articleFive.classList.add('articleZichtbaar');
    fullStoryButton.classList.remove('invisible');
}

asideDivFive.addEventListener('dragend', dragDivFiveEnd);




var displayFullStory = function() {
    articleWrapper.style.bottom = "50px";
    articleFive.classList.remove('articleZichtbaar');
    articleSix.classList.add('articleZichtbaar');
    fullStoryButton.classList.add('invisible');
}

fullStoryButton.addEventListener('click', displayFullStory);