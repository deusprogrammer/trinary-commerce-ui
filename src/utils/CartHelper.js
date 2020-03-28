export default {
    addToCart: (product) => {
        alert(`Added ${product.name} to cart`)
        let cart = window.localStorage.getItem("cart") || "[]"
        cart = JSON.parse(cart)
        cart.push(product)
        window.localStorage.setItem("cart", JSON.stringify(cart))
    },
    removeFromCart: (productToRemove) => {
        alert(`Removed ${productToRemove.name} from cart`)
        let cart = window.localStorage.getItem("cart") || "[]"
        cart = JSON.parse(cart)
        let filteredCart = cart.filter((product) => {
            return product.id !== productToRemove.id
        })
        window.localStorage.setItem("cart", JSON.stringify(filteredCart))
    },
    clearCart: () => {
        window.localStorage.setItem("cart", null)
    },
    getCart: () => {
        let cart = window.localStorage.getItem("cart") || "[]"
        cart = JSON.parse(cart)
        return cart
    }
}