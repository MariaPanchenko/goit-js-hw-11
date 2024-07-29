import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';

document
  .getElementById('search-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (!query) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query',
      });
      return;
    }

    clearGallery();
    showLoader();

    fetchImages(query)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.warning({
            title: 'No results',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        } else {
          renderImages(data.hits);
        }
      })
      .catch(error => {
        iziToast.error({ title: 'Error', message: 'Failed to fetch images' });
      })
      .finally(() => {
        hideLoader();
        document.getElementById('search-form').reset();
      });
  });

const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function () {
  showLoader();
});
