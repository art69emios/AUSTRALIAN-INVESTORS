new WOW().init();


let fleXboxLinkArticles = document.querySelector('.flex-box__link-articles')
let fleXboxLinksInvesting = document.querySelector('.flex-box__links-investing')
let arrow = document.querySelector('.articles-arrow')

fleXboxLinkArticles.addEventListener('click', function(){
   arrow.style.transition = 'all .3s ease'
fleXboxLinksInvesting.classList.toggle('active')

if(fleXboxLinksInvesting.classList.contains('active')){
   arrow.style.transform = 'rotate(-180deg)'
}else{
   arrow.style.transform = 'rotate(0deg)'
}
})