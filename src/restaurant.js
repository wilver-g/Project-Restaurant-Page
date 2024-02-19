 const createRestaurantHomePage = ()=> {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //create and append image element
const image = document.createElement('img');
image.src = 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400';
image.height = '300';
pageContent.appendChild(image);

// create and append headline element
const headline = document.createElement('h1');
headline.textContent = 'Welcome to this Restaurant ';
pageContent.appendChild(headline);

//create and append paragraph element
const paragraph = document.createElement('p');
paragraph.textContent = 'Lorem, ipffsum dolor sit amet consectetur adipisicing elit. Culpa porro velit nobis est mollitia officiis consectetur atque pariatur ducimus distinctio.';
pageContent.appendChild(paragraph);
content.appendChild(pageContent)
}



export default createRestaurantHomePage;
