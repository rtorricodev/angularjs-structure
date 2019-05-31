async function getProducts() {
    const productsRequest = await fetch(api + "/products", {
        headers: {
            user: "12345678"
        }
    });
    const products = await productsRequest.json();
    return products;
}


