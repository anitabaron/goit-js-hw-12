import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const API_KEY = '44946151-dc02d84f49eea13b7d5c48659';
const BASE_URL = 'https://pixabay.com/api/';
const searchForm = document.querySelector(`.search-form`);
const inputField = document.querySelector(`.input-field`);
const resultsGalleryList = document.querySelector(`.gallery-result-list`);
const queryWord = document.querySelector('.query-word');

const createToggle = selector => ({
  enable: () => document.querySelector(selector).classList.remove('disabled'),
  disable: () => document.querySelector(selector).classList.add('disabled'),
});

const loader = createToggle('.spinner');
const loadText = createToggle('.loading-text');
const queryText = createToggle('.query-text');
const moreBtn = createToggle('.more');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const request = inputField.value;
  fetchImages(request);
});

async function fetchImages(request, page = 1) {
  loader.enable();
  loadText.enable();
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: request,
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: `true`,
        page: page,
        per_page: 30,
        // _sort: 'user', //sort Math random
      },
    });
    console.log('Posts: ', response.data);
    if (response.data.hits) {
      displayImages(response.data.hits);
      loader.disable();
      loadText.disable();
      queryText.enable();
      moreBtn.enable();
      queryWord.textContent = inputField.value;
    } else {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
      });
    }
    return response.data;
  } catch (error) {
    loader.disable();
    loadText.disable();
    console.error(error);
    iziToast.warning({
      title: 'Error',
      message: 'An error occurred while fetching images',
    });
  }
}
//
//   await (res => {
//     if (!res.ok) {
//       throw new Error(`Error! status: ${res.status}`);
//     }
//     return res.json();
//   });
//   await (data => {
//     loader.disable();
//     loadText.disable();
//     queryText.enable();
//     queryWord.textContent = inputField.value;

//     if (data.hits) {
//       displayImages(data.hits);
//     } else {
//       iziToast.warning({
//         message:
//           'Sorry, there are no images matching your search query. Please try again!',
//         backgroundColor: '#ef4040',
//         messageColor: '#fff',
//       });
//     }
//   })
// }

const message =
  'Sorry, there are no images matching your search query. Please try again!';

function displayImages(images) {
  resultsGalleryList.innerHTML = '';
  if (images.length === 0) {
    loader.disable();
    loadText.disable();
    queryText.disable();

    iziToast.warning({
      message: message,
      backgroundColor: '#ef4040',
      messageColor: `#fff`,
      position: 'topRight',
      timeout: 2000,
    });
    setTimeout(clearValue, 2000);

    return;
  }
  const imagesMarkup = images.map(makeImgItem).join('');
  resultsGalleryList.insertAdjacentHTML('beforeend', imagesMarkup);
  setTimeout(clearValue, 500);

  lightbox.refresh();
}

function clearValue() {
  inputField.value = '';
}

const lightbox = new SimpleLightbox('.gallery-result-list a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
  className: 'simpleLightboxGallery',
  doubleTapZoom: 2,
  scrollZoom: true,
  overlay: true,
});

function makeImgItem({
  webformatURL,
  largeImageURL,
  tags,
  downloads,
  likes,
  comments,
  views,
}) {
  return `<li class="list-container">
    <div>
      <div class="image-container">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
      </div>
      <div class="descr-element">
        <ul class="descr-list">
          <li>
            <h3>Likes</h3>
              <p>${likes}</p>
          </li>
          <li>
            <h3>Views</h3>
              <p>${views}</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>${comments}</p>
          </li>
          <li>
            <h3>Downloads</h3>
              <p>${downloads}</p>
          </li>
        </ul>
      </div>
    </div>
  </li>`;
}

// const fetchPosts = async () => {
//   const response = await axios.get(
//     '<https://jsonplaceholder.typicode.com/posts?_limit=5&_page=3>'
//   );
//   console.log('Posts: ', response.data);
// };

// Kontroluje liczbę elementów na stronie
let limit = 30;
// Liczba stron w zbiorze
const totalPages = Math.ceil(100 / limit);

// if (page > totalPages) {
//   return iziToast.warning({
//     position: 'topRight',
//     message: "We're sorry, there are no more posts to load",
//   });
// }
