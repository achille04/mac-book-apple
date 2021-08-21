
                                // Extra Memory Cost

    document.getElementById('memory_button_8gb').addEventListener('click', function(){

        const extraMemory = document.getElementById('extra_memory');
        const memoryPrice = extraMemory.innerText;
        const memoryFinalPrice = 0;
        extraMemory.innerText = memoryFinalPrice;
    
    
        let memory = document.getElementById('extra_memory');
        let memorytext = memory.innerText
        let memoryAmount = parseInt(memorytext);
    
        let storage = document.getElementById('extra_storage');
        let storagetext = storage.innerText
        let storageAmount = parseInt(storagetext);
    
        let delivery = document.getElementById('delivery_charge');
        let deliverytext = delivery.innerText
        let deliveryAmount = parseInt(deliverytext);
    
        let totalPrice = document.getElementById('best_price');
        let totalPriceText = totalPrice.innerText;
        let totalPriceAmount = parseInt(totalPriceText)
    
        let total = document.getElementById('total_price');
        total.innerText = totalPriceAmount + memoryAmount + storageAmount + deliveryAmount;

        var priceWithTax = document.getElementById('total_price_with_Tax')
        priceWithTax.innerText = total.innerText;
                                
                                
                                    
                                
    });
                                
document.getElementById('memory_button_16gb').addEventListener('click', function(){

    const extraMemory = document.getElementById('extra_memory');
    const memoryPrice = extraMemory.innerText;
    const memoryFinalPrice = 180;
    extraMemory.innerText = memoryFinalPrice;


    let memory = document.getElementById('extra_memory');
    let memorytext = memory.innerText
    let memoryAmount = parseInt(memorytext);

    let storage = document.getElementById('extra_storage');
    let storagetext = storage.innerText
    let storageAmount = parseInt(storagetext);

    let delivery = document.getElementById('delivery_charge');
    let deliverytext = delivery.innerText
    let deliveryAmount = parseInt(deliverytext);

    let totalPrice = document.getElementById('best_price');
    let totalPriceText = totalPrice.innerText;
    let totalPriceAmount = parseInt(totalPriceText)

    let total = document.getElementById('total_price');
    total.innerText = totalPriceAmount + memoryAmount + storageAmount + deliveryAmount;

    var priceWithTax = document.getElementById('total_price_with_Tax')
    priceWithTax.innerText = total.innerText;

    

});
                                    
                                
                                   // Extra Storage Cost
                                
document.getElementById('storage_button_256gb').addEventListener('click', function(){
                                
    const extraStorage = document.getElementById('extra_storage');
                                
    const StoragePrice = extraStorage.innerText;

    const storageFinalPrice = 0;

    extraStorage.innerText = storageFinalPrice;

    let memory = document.getElementById('extra_memory');
    let memorytext = memory.innerText
    let memoryAmount = parseInt(memorytext);

    let storage = document.getElementById('extra_storage');
    let storagetext = storage.innerText
    let storageAmount = parseInt(storagetext);

    let delivery = document.getElementById('delivery_charge');
    let deliverytext = delivery.innerText
    let deliveryAmount = parseInt(deliverytext);

    let totalPrice = document.getElementById('best_price');
    let totalPriceText = totalPrice.innerText;
    let totalPriceAmount = parseInt(totalPriceText)

    let total = document.getElementById('total_price');
    total.innerText = totalPriceAmount + memoryAmount + storageAmount + deliveryAmount;

    var priceWithTax = document.getElementById('total_price_with_Tax')
    priceWithTax.innerText = total.innerText;

});
                                
                                
document.getElementById('storage_button_512gb').addEventListener('click', function(){
                                
    const extraStorage = document.getElementById('extra_storage');
                                
    const StoragePrice = extraStorage.innerText;

    const storageFinalPrice = 100;

    extraStorage.innerText = storageFinalPrice;

    let memory = document.getElementById('extra_memory');
    let memorytext = memory.innerText
    let memoryAmount = parseInt(memorytext);

    let storage = document.getElementById('extra_storage');
    let storagetext = storage.innerText
    let storageAmount = parseInt(storagetext);

    let delivery = document.getElementById('delivery_charge');
    let deliverytext = delivery.innerText
    let deliveryAmount = parseInt(deliverytext);

    let totalPrice = document.getElementById('best_price');
    let totalPriceText = totalPrice.innerText;
    let totalPriceAmount = parseInt(totalPriceText)

    let total = document.getElementById('total_price');
    total.innerText = totalPriceAmount + memoryAmount + storageAmount + deliveryAmount;

    var priceWithTax = document.getElementById('total_price_with_Tax')
    priceWithTax.innerText = total.innerText;

});
                                
                                
                                
document.getElementById('storage_button_1tb').addEventListener('click', function(){

    const extraStorage = document.getElementById('extra_storage');
                                
    const StoragePrice = extraStorage.innerText;

    const storageFinalPrice = 180;

    extraStorage.innerText = storageFinalPrice;

    let memory = document.getElementById('extra_memory');
    let memorytext = memory.innerText
    let memoryAmount = parseInt(memorytext);

    let storage = document.getElementById('extra_storage');
    let storagetext = storage.innerText
    let storageAmount = parseInt(storagetext);

    let delivery = document.getElementById('delivery_charge');
    let deliverytext = delivery.innerText;
    let deliveryAmount = parseInt(deliverytext);

    let totalPrice = document.getElementById('best_price');
    let totalPriceText = totalPrice.innerText;
    let totalPriceAmount = parseInt(totalPriceText);

    let total = document.getElementById('total_price');
    total.innerText = totalPriceAmount + memoryAmount + storageAmount + deliveryAmount;

    var priceWithTax = document.getElementById('total_price_with_Tax')
    priceWithTax.innerText = total.innerText;

});
                                    
                                
                                // Extra Delivery Charge
                                
                                
document.getElementById('free_delivery').addEventListener('click', function(){
                                
    let deliveryCharge = document.getElementById('delivery_charge');
                                
    let deliveryCost = deliveryCharge.innerText;

    const deliveryFinalPrice = 0;

    deliveryCharge.innerText = deliveryFinalPrice;

    let memory = document.getElementById('extra_memory');
    let memorytext = memory.innerText
    let memoryAmount = parseInt(memorytext);

    let storage = document.getElementById('extra_storage');
    let storagetext = storage.innerText
    let storageAmount = parseInt(storagetext);

    let delivery = document.getElementById('delivery_charge');
    let deliverytext = delivery.innerText;
    let deliveryAmount = parseInt(deliverytext);

    let totalPrice = document.getElementById('best_price');
    let totalPriceText = totalPrice.innerText;
    let totalPriceAmount = parseInt(totalPriceText);

    let total = document.getElementById('total_price');
    total.innerText = totalPriceAmount + memoryAmount + storageAmount + deliveryAmount;

    var priceWithTax = document.getElementById('total_price_with_Tax')
    priceWithTax.innerText = total.innerText;

    

});
                                    
document.getElementById('charged_delivery').addEventListener('click', function(){

    let deliveryCharge = document.getElementById('delivery_charge');

    let deliveryCost = deliveryCharge.innerText;

    const deliveryFinalPrice = 20;

    deliveryCharge.innerText = deliveryFinalPrice;

    let memory = document.getElementById('extra_memory');
    let memorytext = memory.innerText
    let memoryAmount = parseInt(memorytext);

    let storage = document.getElementById('extra_storage');
    let storagetext = storage.innerText
    let storageAmount = parseInt(storagetext);

    let delivery = document.getElementById('delivery_charge');
    let deliverytext = delivery.innerText;
    let deliveryAmount = parseInt(deliverytext);

    let totalPrice = document.getElementById('best_price');
    let totalPriceText = totalPrice.innerText;
    let totalPriceAmount = parseInt(totalPriceText);

    let total = document.getElementById('total_price');
    total.innerText = totalPriceAmount + memoryAmount + storageAmount + deliveryAmount;

    
    var priceWithTax = document.getElementById('total_price_with_Tax')
    priceWithTax.innerText = total.innerText;

});


/* document.getElementById('apply_button').addEventListener('click', function(){

    const promoCode = document.getElementById('input_js');
    const promoField = promoCode.value;

    const taxPriceOfTotal = document.getElementById('total_price_with_Tax');
    const taxPrice = taxPriceOfTotal.innerText;
    const totalTaxPrice = parseInt(taxPrice);
    
    if(promoCode == 'stevekaku' && totalTaxPrice == 1299){

        console.log('1234')

    }

}) */
                                 
                                
                                