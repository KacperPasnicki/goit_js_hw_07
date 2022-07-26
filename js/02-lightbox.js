import { galleryItems } from './gallery-items.js';

// Change code below this line
const gallery = document.querySelector('.gallery')

const images= galleryItems.map((e) => {
    const image = `<div class = "gallery__item">
   <a class= "gallery__link" href="${e.original}">
   <img class="gallery__image"
    src="${e.preview}" 
    data-source="${e.original}" 
    alt='${e.description}'
    title = '${e.description}'
    />
    </a>
    </div>`;

    return image;
}).join('');

gallery.insertAdjacentHTML("afterbegin", images )

 new SimpleLightbox('.gallery a',{ captionDelay : 250})
