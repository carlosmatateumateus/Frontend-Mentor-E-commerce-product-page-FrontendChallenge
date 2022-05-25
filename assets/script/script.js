let quantity_of_products = document.querySelector('#quantity_of_products')
let image_view = document.getElementById('viewer')
let cart_products = document.getElementById('number_of_products')
const increment_productos = (order) => {

    if (order == '+'){
        quantity_of_products.textContent = Number(quantity_of_products.textContent) + 1
    }
    else{
        if (Number(quantity_of_products.textContent) > 0){
            quantity_of_products.textContent = Number(quantity_of_products.textContent) - 1
        }
    }
    cart_products.textContent = Number(quantity_of_products.textContent)

    if (cart_products.textContent > 0){
        cart_products.style.display = 'block'
        cart_products.style.backgroundColor = '#FF7D1B'
        cart_products.style.color = 'white'
        cart_products.style.borderRadius = '5px'
    }
    else{
        cart_products.style.display = 'none'
    }
}

const change_image = (image) =>{
    image_view.style.backgroundImage = `url('assets/images/image-product-${image}.jpg')`
}
