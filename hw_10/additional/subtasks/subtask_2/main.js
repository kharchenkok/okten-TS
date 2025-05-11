const gallery = document.getElementById('gallery');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const galleryItems = [];

for (let i = 0; i < 100; i++) {
    galleryItems.push({
        id: i+1,
        src: `https://picsum.photos/id/${i+1}/300/200`,
        title: `Image ${i+1}`,
        width: 300,
        height: 200
    });
}


const itemsPerPage = 10;
let currentPage = 1;


function renderGalleryItems() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const items = galleryItems.slice(start, end);

    console.log('current page', currentPage);
    console.log('gallery items', items);

    gallery.innerHTML = '';

    items.forEach(item => {
        const liMarkup=`
        <li>
             <img src="${item.src}" alt="${item.title}" width="${item.width}" height="${item.height}">
             <h3>${item.title}</h3>
        </li>
        `
        gallery.insertAdjacentHTML('beforeend', liMarkup);
    });

    currentPage === 1 ? prevBtn.disabled = true : prevBtn.disabled = false;
    currentPage >= Math.floor(galleryItems.length / itemsPerPage) ? nextBtn.disabled = true : nextBtn.disabled = false;

}

prevBtn.addEventListener('click',()=>{
   if(currentPage>0){
       currentPage-=1;
       renderGalleryItems();
   }
})

nextBtn.addEventListener('click', () => {
    if (currentPage < Math.floor(galleryItems.length / itemsPerPage)) {
        currentPage += 1;
        renderGalleryItems();
    }

})

renderGalleryItems();