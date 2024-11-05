const photoContainer = document.getElementById("photo-container");

// photoContainer.innerHTML = getPhotoElement(3);
// photoContainer.innerHTML += getPhotoElement(5);
// getPhotoElement(photo_id);

let content = "<div class = 'column'>";
for(let i=0; i<16; i++){

    if(i!=0 && (i % 4 == 0)){
      content += `</div><div class="column">${getPhotoElement(i+1)}`
    }else{
        content += getPhotoElement(i+1);
    }

}
content += "</div>";
photoContainer.innerHTML = content;

// for(let i=0; i<16; i++){
//     photoContainer.innerHTML += getPhotoElement(i+1);
// }


function getPhotoElement(photo_id){
    return `<a href="#" class = "photo">
    <img alt="Photo ${photo_id}" src="images/galeria-proyectos/photo_${photo_id}.jpg"/>
    </a>`;
}