export const getBase64 = (img: Blob, callback: (url: string) => void) => {
  const reader = new FileReader()

  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}
