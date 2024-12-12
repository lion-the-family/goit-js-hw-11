export function createImageCard({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
      <div class="image-card">
        <a href="${largeImageURL}" class="image-link">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
      </div>`;
}

export function renderGallery(images, galleryElement) {
  const markup = images.map(createImageCard).join('');
  galleryElement.innerHTML = markup;
}

export function clearGallery(galleryElement) {
  galleryElement.innerHTML = '';
}
