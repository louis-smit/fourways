import image from "./wtf.gif";

export const fetchImage = () =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(image);
		}, 2000);
	});


  "https://tenor.com/view/wtf-what-really-blink182-gif-13278167"