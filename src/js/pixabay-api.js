const API_KEY = '44930065-b56e1482fbed5c821691768f3';

export function fetchImages(query) {
  return fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
