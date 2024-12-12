// main.js

import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
    });
    return;
  }

  clearGallery(gallery);
  toggleLoader(true);

  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query.',
        });
      } else {
        renderGallery(data.hits, gallery);
        initLightbox();
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching images. Please try again.',
      });
    })
    .finally(() => {
      toggleLoader(false);
    });
}

function toggleLoader(isVisible) {
  loader.style.display = isVisible ? 'block' : 'none';
}

function initLightbox() {
  if (lightbox) {
    lightbox.destroy();
  }
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
