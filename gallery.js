document.addEventListener("DOMContentLoaded", function () {
    initializeGallery();
});

function initializeGallery() {
    console.log("Gallery initialized.");
    
    let images = document.querySelectorAll(".preview");
    let imageDiv = document.getElementById("image");
    
    images.forEach(image => {
        image.addEventListener("mouseover", function () {
            upDate(this);
        });
        
        image.addEventListener("mouseleave", function () {
            unDo();
        });
        
        image.addEventListener("focus", function () {
            upDate(this);
        });
        
        image.addEventListener("blur", function () {
            unDo();
        });
        
        image.setAttribute("tabindex", "0"); // Ensure images are keyboard accessible
    });
}


function upDate(previewPic) {
    console.log("Event triggered for:", previewPic.alt);

    let imageDiv = document.getElementById('image');

    imageDiv.textContent = previewPic.alt;  // Use textContent for safety
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
    console.log("Undo function triggered!");

    let imageDiv = document.getElementById('image');

    imageDiv.textContent = "Hover over an image below to display here.";
    imageDiv.style.backgroundImage = "url('')";
}
