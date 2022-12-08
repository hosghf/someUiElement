const content = document.querySelector('.content')

const homeButton = document.querySelector('.home')
const categoryButton = document.querySelector('.category')
const cartButton = document.querySelector('.cart')
homeButton.addEventListener('click', changePage.bind(this, 'home'))
categoryButton.addEventListener('click', changePage.bind(this, 'category'))
cartButton.addEventListener('click', changePage.bind(this, 'cart'))

function changePage(page) {
  content.innerHTML = ''

  if(page === 'home') {
    content.innerHTML = '<h1>home page</h1>'
    return
  }

  if(page === 'category') {
    content.innerHTML = '<h1>home category</h1>'
    return
  }

  content.innerHTML = '<h1>home cart</h1>'
}