window.onscroll = function() {
    const coord = document.getElementById('panel')
    const ulElement = document.getElementById('ulHead')
    if (pageYOffset !== 0) {
        ulElement.style.boxShadow = '0 0 20px #000'
        ulElement.style.height = '200px'
        coord.style.display = 'none'
    } else {
        ulElement.style.boxShadow = 'none'
        ulElement.style.height = '180px'
        coord.style.display = 'block'
    }
}

function searchBlockShow() {
    const element = document.getElementById('searchInput')
    element.value = ''
    const coord = document.getElementById('searchBar')
    coord.style.display = 'table'
    coord.style.height = '50px'
}
function searchBlockNone() {
    const element = document.getElementById('searchInput')
    element.value = 'Поиск'
    const coord = document.getElementById('searchBar')
    coord.style.display = 'none'
    coord.style.height = '0px'
}


function signIN() {
    const element = document.getElementById('signIn')
    element.style.display = 'flex'
    const coord = document.getElementById('body')
    coord.style.opacity = 0.7
    coord.addEventListener('click', blurReg)
}
function blurReg() {
    const coord = document.getElementById('body')
    coord.addEventListener('click', blurSign)
}
function blurSign(element) {
    if ((element.clientX < 424 || element.clientX > 824) || (element.clientY < 120 || element.clientY > 720)) {
        const element = document.getElementById('signIn')
        const coord = document.getElementById('body')
        coord.style.opacity = 1
        element.style.display = 'none'
        coord.removeEventListener('click', blurReg)
        coord.removeEventListener('click', blurSign)
    }
}