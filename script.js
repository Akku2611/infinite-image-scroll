const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photoArray = [];
const count = 10;
const apiKey = 'JfLWietnXZPrmpfPyPYRz1i3D3QeNB59W_7K4L125IM';
const unsplashAPIUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttributes(element, attributes){
    for (const key in attributes) {
        element.setAttribute(key,attributes[key]);
    }
}

function displayPhotos() {
    photoArray.forEach((photo) => {
        // Create <a> tag to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item,{
            href: photo.links.html,
            target: '_blank',
        });

        // Create <img> tag for image
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        item.appendChild(img);
        imageContainer.appendChild(item);;
    });
}

async function getPhotosFromUnsplashAPI() {
    try{
        const response = await fetch(unsplashAPIUrl);
        photoArray = await response.json();
        console.log(photoArray);
        displayPhotos();
    }
    catch(error) {
        // Catch error here
        console.log("Whoops, some error occured" + error);
    }
}

getPhotosFromUnsplashAPI();