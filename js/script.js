function sleep(millisecond) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, millisecond)
    })
}

// window.onload = function test(){
    const items = document.querySelectorAll("[c-item]")
    // const carousel = document.querySelectorAll("[carousel]");
    const carousel = document.getElementById("carousel");
    console.log(carousel)
    
    let i = 0;
    setInterval(function() {
        if (i < items.length){
            i++;
            carousel.style.transform = "translateX(-"+i+"00%)";
            if (i == 3){
                i = -1
            }
        }
    },7000);
// }
function carouselPrevious(){
    i--
    carousel.style.transform = "translateX(-"+i+"00%)";
    console.log('i++')
}
function carouselNext(){
    i++
    carousel.style.transform = "translateX(-"+i+"00%)";
    console.log('i++')
}