const API_KEY = '45170299-c4257b7fc983e8ba1f62eed92';

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
