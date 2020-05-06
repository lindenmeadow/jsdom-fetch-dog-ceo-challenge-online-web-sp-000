const IMG_URL = "https://dog.ceo/api/breeds/image/random/4"
const BREED_URL = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", initPage)

function initPage (){
  fetchDogs()
  fetchBreeds()
  addDropDownHander()
}

function fetchDogs(){
  fetch(IMG_URL)
  .then(function(response){return response.json()})
  .then(function(myJson){myJson.message.forEach(renderDog)})
}

function fetchBreeds(){
  fetch(BREED_URL)
  .then(function(response){return response.json()})
  .then(function(myJson){(Object.keys(myJson.message).forEach(renderBreed))})
}

function renderBreed(breed) {
  let ul = document.querySelector("#dog-breeds")
  let li = document.createElement('li');
  li.innerHTML = breed
  li.addEventListener('click', function() {
    li.style.color = 'blue';
  })
  if (li.innerHTML[0] === document.querySelector('#breed-dropdown').value) {
    ul.appendChild(li)
  }
}

function renderDog(dog) {
  var img = document.createElement('img');
  img.src = dog
  document.body.appendChild(img)
}

function addDropDownHander () {
  let ul = document.querySelector("#dog-breeds")
  drop = document.querySelector('#breed-dropdown')

  drop.addEventListener('change', function () {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    fetchBreeds()
  })
}
