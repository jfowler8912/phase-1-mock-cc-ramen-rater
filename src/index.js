// write your code here
// See all ramen images in the div with the id of ramen-menu
// When the page loads, request the data from the server to get all the ramen objects.
// Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
const baseUrl = 'http://localhost:3000/'
const ramenUrl = baseUrl + 'ramens/'
function fetchRamen (){
    fetch(ramenUrl)
    .then( response => response.json())
    .then(ramenData => renderAllRamen(ramenData))
}
fetchRamen()

function renderAllRamen (ramenData){
    ramenData.forEach (ramen =>renderRamenImage(ramen))
    }
function renderRamenImage (ramen){
    const ramenMenuDiv = document.getElementById('ramen-menu')
    const ramenImage = document.createElement('img')
    ramenImage.src = ramen.image
    ramenMenuDiv.appendChild(ramenImage)
    
    // Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div
    ramenImage.addEventListener( 'click',() => showRamenInfo(ramen))

}

function showRamenInfo(ramen) {
    

    const ramenDetailDiv = document.getElementById('ramen-menu')
    const ramenDetailImage = document.getElementById('ramen-detail-image')
    ramenDetailImage.src = ramen.image
    const ramenDetailTitle = document.getElementById('ramen-detail-name')
    ramenDetailTitle.textContent = ramen.name
    const ramenDetailRestaurant = document.getElementById('ramen-detail-restaurant')
    ramenDetailRestaurant.textContent = ramen.restaurant
    // where it says insert comment here and insert rating here
    const ramenDetailRating = document.getElementById('rating-display')
    ramenDetailRating.textContent = ramen.rating 
    const ramenDetailComment = document.getElementById('comment-display')
    ramenDetailComment.textContent = ramen.comment
    
}

// Create a new ramen after submitting the new-ramen form.
const newRamenForm = document.getElementById('new-ramen')
newRamenForm.addEventListener('submit', event => {
    event.preventDefault()
    const newRamen = {
        "name": newRamenForm.name.value,
        "restaurant": newRamenForm.restaurant.value,
        "image": newRamenForm.image.value,
        "rating": newRamenForm.rating.value,
        "comment": newRamenForm['new-comment'].value
      }
      // The new ramen should be added to the#ramen-menu div.
      renderRamenImage (newRamen)
      

})


    
  
   












