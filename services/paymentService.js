function processPayment(amount) {

    let total = amount;

    if(amount > 1000){
        total = amount - 50;
    }

    return total;

}

module.exports = {
    processPayment
};