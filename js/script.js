function sleep(millisecond) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, millisecond)
    })
}

const items = document.querySelectorAll("[c-item]")
const carousel = document.querySelector("[carousel]")
let i = 0;

// 自动轮播
if (document.querySelector("[c-autoplay]")){
    setInterval(function() {
        carouselNext()
    },7000);
}

// 上/下一页
function carouselPrevious(){
    i--
    if (i < 0) i = items.length-1;
    carousel.style.transform = "translateX(-"+i+"00%)";
}
function carouselNext(){
    i++
    if (i > items.length-1) i = 0;
    carousel.style.transform = "translateX(-"+i+"00%)";
}

function setCarouselPointContainer() {
    const carouselPointContainer = document.querySelector("[c-point]");
    const appendCarouselPointContainer = document.createElement("div")
    appendCarouselPointContainer.className = 'carouselPointContainer'
    carouselPointContainer.appendChild(appendCarouselPointContainer)
    setCarouselPoint()
}
function setCarouselPoint(){
    for (let i = 0; i < items.length; i++) {
        const carouselPointContainer = document.getElementsByClassName("carouselPointContainer")
        const appendCarouselPoint = document.createElement("div")
        appendCarouselPoint.className = 'carouselPoint'
        carouselPointContainer[0].appendChild(appendCarouselPoint)
        carouselPointContainer[0].style.display="flex"
        carouselPointContainer[0].style.position="absolute"
        carouselPointContainer[0].style.bottom="12px"
        carouselPointContainer[0].style.left="50%"
        carouselPointContainer[0].style.transform="translateX(-50%)"
    }
    for (let i = 0; i < items.length; i++){
        const carouselPoint = document.getElementsByClassName('carouselPoint')
        carouselPoint[i].style.width="9px"
        carouselPoint[i].style.height="9px"
        carouselPoint[i].style.background="lightgray"
        carouselPoint[i].style.borderRadius="100%"
        carouselPoint[i].style.margin="5px"
        carouselPoint[i].style.zIndex=2
        carouselPoint[i].onclick = 'setCarouselPage'
    }
}

function setCarouselPage(){
    console.log('s')
}

setCarouselPointContainer()
document.getElementsByClassName('carouselContainer').onclick='setCarouselPage()'