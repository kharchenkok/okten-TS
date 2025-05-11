const container = document.getElementById('container-js');

const url = new URL('https://dummyjson.com/carts');
url.searchParams.set('limit',0);

fetch(url)
    .then(res => res.json())
    .then( ({carts}) => {
        console.log('carts',carts)  ;
    const cartList = document.createElement('ol');
    cartList.classList.add('cart-list');
    carts.forEach(cart => {
        // console.log(cart);
        const itemMarkup = `
        <li class="cart-item">
            <h2>Cart ${cart.id}</h2>
            <div class="user-wrapper">
                <h3>User <span>${cart.userId}</span></h3>
                <div class="user-info">
                    <p>Total products :<span>${cart.totalProducts}</span></p>
                    <p>Total products quantity :<span>${cart.totalQuantity}</span></p>
                    <p>Total : <span>${cart.total.toFixed(2)} $</span></p>
                    <p>Total with discount : <span>${cart.discountedTotal.toFixed(2)} $</span></p>
                </div>
            </div>
            <div class="products-wrapper">
                <h3>Products in cart:</h3>
                <ul class="products-list" style="grid-template-columns: repeat(${cart.products.length<=2?4:cart.products.length},1fr)">
                    ${cart.products.map(product => `
                    <li class="products-item" >
                        <div class="img-wrapper">
                            <img src="${product.thumbnail}" alt="${product.title}" width="150" height="150">
                        </div>
                        <div class="products-content">
                            <h4>${product.title}(id:${product.id})</h4>
                            <div class="products-info">
                                <p>Price :<span>${product.price}$</span></p>
                                <p>Quantity :<span>${product.quantity}</span></p>
                                <p>Discount :<span>${product.discountPercentage}%</span></p>
                                <p>Total : <span>${product.total.toFixed(2)}$</span></p>
                                <p>Total with discount : <span>${product.discountedTotal.toFixed(2)}$</span></p>
                            </div>
                        </div>
                        
                    </li>
                    `).join('')}
                </ul>
            </div>
        </li> `
        cartList.insertAdjacentHTML('beforeend',itemMarkup)

    })

        container.appendChild(cartList);

});


