const api = 'http://localhost:8080';

async function postOrder(orderData) {
    await fetch(api + "/order", {
    
        body: JSON.stringify(orderData),
        headers: {
            'Content-Type': 'application/json',
            user: "12345678"
        },
        method: "POST"
    });
}

async function getOrdersByStatus(status) {
    const ordersRequest = await fetch(api + "/orders?status=" + status, {
        headers: {
            'Content-Type': 'application/json',
            user: "12345678"
        }
    } );
    const orders = await ordersRequest.json();
    return orders;
}

async function getOrderByKey(key) {
    const orderRequestet = await fetch(api + '/order/' + key, {
        headers: {
            'Content-Type': 'application/json',
            user: "12345678"
        }
    });
    const order = await orderRequestet.json();
    return order;
}