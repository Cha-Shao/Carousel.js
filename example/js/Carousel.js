var carouselTime = 7000 //轮播切换的速度(默认7s)

// function sleep(millisecond) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, millisecond)
//     })
// }

const items = document.querySelectorAll("[c-item]")
const carousel = document.querySelector("[carousel]")
const carouselPoint = document.getElementsByClassName('carouselPoint')
let i = 0;

// 自动轮播
if (document.querySelector("[c-autoplay]")){
    setInterval(function() {
        carouselNext()
    },carouselTime);
}

// 上/下一页
function carouselPrevious(){
    i--
    if (i < 0) i = items.length-1;
    const _i = i
    carousel.style.transform = "translateX(-"+i+"00%)";
    if (document.querySelector("[c-point]")){
        for (let i = 0; i < items.length; i++){
            carouselPoint[i].style.cssText='width: 9px;height:9px;background:lightgray;border-radius:100%;margin:5px;z-index:2;cursor:pointer;'}
        carouselPoint[_i].style.background='white'
    }
}
function carouselNext(){
    i++
    if (i > items.length-1) i = 0;
    const _i = i
    carousel.style.transform = "translateX(-"+i+"00%)";
    // 如果开启了页码就渲染切换
    if (document.querySelector("[c-point]")){
        for (let i = 0; i < items.length; i++){
            carouselPoint[i].style.cssText='width: 9px;height:9px;background:lightgray;border-radius:100%;margin:5px;z-index:2;cursor:pointer;'}
        carouselPoint[_i].style.background='white'
    }
}

// 设置轮播页下面的点
function setCarouselPointContainer() {
    const carouselPointContainer = document.querySelector("[c-point]");
    // 如果存在
    if (carouselPointContainer) {
        const appendCarouselPointContainer = document.createElement("div")
        appendCarouselPointContainer.className = 'carouselPointContainer'
        carouselPointContainer.appendChild(appendCarouselPointContainer)
        setCarouselPoint()
    }
}
function setCarouselPoint(){
    // 添加页码container
    for (let i = 0; i < items.length; i++) {
        const carouselPointContainer = document.getElementsByClassName("carouselPointContainer")
        const appendCarouselPoint = document.createElement("div")
        appendCarouselPoint.className = 'carouselPoint'
        carouselPointContainer[0].appendChild(appendCarouselPoint)
        carouselPointContainer[0].style.cssText="display:flex;position:absolute;bottom:12px;"
        if (document.querySelector("[point-right]")) carouselPointContainer[0].style.right="27px"; else {carouselPointContainer[0].style.left="50%";carouselPointContainer[0].style.transform="translateX(-50%)"}
    }
    // 添加页码按钮
    for (let i = 0; i < items.length; i++){
        carouselPoint[i].setAttribute("onclick","setCarouselPage("+i+")")
        carouselPoint[i].setAttribute("Page",i)
        carouselPoint[i].style.cssText='width: 9px;height:9px;background:lightgray;border-radius:100%;margin:5px;z-index:2;cursor:pointer;'
    }
}

// 点击页码后
function setCarouselPage(setPage){
    i = setPage
    const _i = i
    carousel.style.transform = "translateX(-"+i+"00%)";
    for (let i = 0; i < items.length; i++){
        carouselPoint[i].style.cssText='width: 9px;height:9px;background:lightgray;border-radius:100%;margin:5px;z-index:2;cursor:pointer;'}
    carouselPoint[_i].style.background='white'
}

setCarouselPointContainer()