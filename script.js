let time = 5000,
    currenttImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;
function nextImage() {
    images[currenttImageIndex]
        .classList.remove("selected")
    currenttImageIndex++
    if(currenttImageIndex >= max)
        currenttImageIndex = 0
    images[currenttImageIndex]
        .classList.add("selected")
}
function start() {
    setInterval(() => {
        nextImage()
    }, time)
}
window.addEventListener("load", start)