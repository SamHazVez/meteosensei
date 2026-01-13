const imagesContext = require.context("../assets/images", true, /\.(JPEG)$/);

export function getMarkerImages(destId, markerId) {
  return imagesContext
    .keys()
    .filter(path => path.startsWith(`./${destId}/${markerId}/`))
    .map(imagesContext);
}
