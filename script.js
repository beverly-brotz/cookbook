let recipeContent = document.getElementById('recipe-html')
let pageTitle = document.getElementById('page-title')


/* functions for buttons - swaps html on index page to show different recipes*/

function chiliGet() {
  fetch('https://beverly-brotz.github.io/odin-recipes/recipes/chili.html').then(function(response) {
    return response.text()
  }).then(function(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var recipe = doc.querySelector('#chili-html').innerHTML;
    recipeContent.innerHTML = recipe;
  }).catch(function(err){
    console.log('vailed to fetch page: ', err);
  });
  pageTitle.innerText = "Chili Recipe"
}

function meatloafGet() {
  fetch('https://beverly-brotz.github.io/odin-recipes/recipes/meatloaf.html').then(function(response) {
    return response.text()
  }).then(function(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var recipe = doc.querySelector('#meatloaf-html').innerHTML;
    recipeContent.innerHTML = recipe;
  }).catch(function(err){
    console.log('vailed to fetch page: ', err);
  });
  pageTitle.innerText = "Meatloaf Recipe"
}
function stuffedpeppersGet() {
  fetch('https://beverly-brotz.github.io/odin-recipes/recipes/stuffedpeppers.html').then(function(response) {
    return response.text()
  }).then(function(html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var recipe = doc.querySelector('#stuffedpeppers-html').innerHTML;
    recipeContent.innerHTML = recipe;
  }).catch(function(err){
    console.log('vailed to fetch page: ', err);
  });
  pageTitle.innerText = "Stuffed Peppers Recipe"
}