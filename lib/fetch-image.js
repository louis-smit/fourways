import image from "./wtf.gif"

export const fetchImage = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(image)
    }, 2000)
  })
