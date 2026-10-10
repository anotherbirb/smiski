const boxes = document.querySelectorAll('.boxes');

boxes.forEach(image => {
    image.addEventListener('click', (event) => {
        console.log(image.id);
        boxClicked(image);
    })
})

function boxClicked(image) {
    console.log("clicked");
    const unboxing = "unboxing&bsol;"
    window.location.href = "unboxing"+"\\"+image.id + ".html";
}
