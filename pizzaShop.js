//step 1: creating a pizza

const createPizza = (type) => {
    const menu = { hawaii: 120, gorgonzola: 125, calzone: 130 };
    return { type, price: menu[type] };     //menu[hawaii] gives 120
    //const myPizza = createPizza("gorgonzola");
    //myPiza => { type: "gorgonzola", price: 125 };
};

//send an order to the kitchen
const sendOrder = (pizza) => {
    console.log(`Sending ${pizza.type} to the kitchen!`);
    const orderID = Math.floor(Math.random() * 1000);
    return orderID;
};

//charging the customer
const chargeCustomer = (orderID, amount) => {
    if (!orderID) {
        throw new Error("Cannot charge the customer without a valid order ID.");
    }
    console.log(`Charging ${amount} kr for order #${orderID}`);
    return true;
};

const orderPizza = (pizzaType) => {
    const pizza = createPizza(pizzaType);
    const orderID = sendOrder(pizza);
    const paymentSuccess = chargeCustomer(orderID, pizza.price);
    return paymentSuccess;
};


export { sendOrder, orderPizza };
