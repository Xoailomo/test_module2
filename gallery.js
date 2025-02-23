/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function upDate(previewPic) {
    console.log("Event triggered!");
    console.log("Image source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);

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
