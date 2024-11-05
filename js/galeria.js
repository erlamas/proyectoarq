const photoContainer = document.getElementById("photo-container");

let content = "";
for(let i=0; i<16; i++){
        content += getPhotoElement(i+1);
 }
photoContainer.innerHTML = content;

function getPhotoElement(photo_id){
    return `<a href="#" class = "photo">
    <img alt="Photo ${photo_id}" src="images/galeria-proyectos/photo_${photo_id}.jpg"/>
    </a>`;
}