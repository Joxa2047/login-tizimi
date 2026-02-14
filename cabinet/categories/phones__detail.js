const productId = new URLSearchParams(window.location.search).get('id');


const product = products.find((el) => {
    return el.id == productId
})




document.querySelector(".phones__detail-title").innerHTML = product.name;
document.querySelector(".phones__detail-price").innerHTML = "$" + product.price;
document.querySelector(".phones__detail-description").innerHTML = product.description;
