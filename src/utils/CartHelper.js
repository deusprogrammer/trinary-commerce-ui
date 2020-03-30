export default {
    addToCart: (product) => {
        let cart = window.localStorage.getItem("cart")
        cart = JSON.parse(cart)
        if (!cart) {
            cart = []
        }
        cart.push(product)
        window.localStorage.setItem("cart", JSON.stringify(cart))
    },
    removeFromCart: (productToRemove) => {
        let cart = window.localStorage.getItem("cart") || "[]"
        cart = JSON.parse(cart)
        if (!cart) {
            cart = []
        }
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