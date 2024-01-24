export default function dataURItoBlob(dataURI) {
  if (typeof dataURI !== 'string') {

    return null; // or handle the error in your own way
  }

  // Check if the dataURI is in the expected format
  const parts = dataURI.split(',');
  if (parts.length !== 2) {

    return null; // or handle the error in your own way
  }

  // Convert base64/URLEncoded data component to raw binary data held in a string
  const byteString = atob(parts[1]);

  // Separate out the mime component
  const mimeString = parts[0].split(':')[1].split(';')[0];

  // Write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}
