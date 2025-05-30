interface Product {
    title: string;
    price: number;
    image: string;
}

let products:Product[] = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://us-east-1-shared-usea1-02.graphassets.com/A2lCPH6tTelhrsostvMQpz/auto_image/resize=fit:max,width:640/quality=value:75/AQ3HZHQ3RC2BzstBoUdV'
    },
];

document.write('<div class="container">');
document.write('<div class="product-list">');
for (let product of products) {
    document.write(` <div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price} </h3>
        <img src="${product.image}" alt="${product.title}" class="product-image">
</div>`)

}
document.write('</div>');
document.write('</div>');
