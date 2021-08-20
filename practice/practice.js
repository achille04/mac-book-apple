/* document.getElementById('deposit_button').addEventListener('click', function(){

    const depositInput = document.getElementById('deposit_total')
    const newDepositAmountText = depositInput.HTML;
    const newDepositAmount = parseFloat(newDepositAmountText);

    console.log(newDepositAmount)

}) */


                            
                            
                            /*********************** Memory **********************/

                            function updateMemory(isAdding){

                                let extraMemory = document.getElementById('extra_memory');
                                let memoryPrice = extraMemory.innerText;
                            
                                if(isAdding){
                            
                                    extraMemory.innerText = parseInt(memoryPrice) + 180;
                            
                                }
                            
                                else if (memoryPrice > 1){
                            
                                    extraMemory.innerText = parseInt(memoryPrice) * 0;
                            
                                }
                                
                            
                            
                            }
                            
                            document.getElementById('memory_button_8gb').addEventListener('click', function(){
                            
                                /* let extraMemory = document.getElementById('extra_memory');
                                let memoryPrice = extraMemory.innerText;
                                extraMemory.innerText = parseInt(memoryPrice) - 180; */
                            
                                updateMemory(false);
                                
                            
                            })
                            
                            document.getElementById('memory_button_16gb').addEventListener('click', function(){
                            
                                /* let extraMemory = document.getElementById('extra_memory');
                                let memoryPrice = extraMemory.innerText;
                                extraMemory.innerText = parseInt(memoryPrice) + 180; */
                            
                                // console.log(extraMemory.innerText);
                                // console.log(memoryPrice)
                            
                                updateMemory(true);
                            
                            }) 
                            
                                                        
                                                        
                                                        /*********************** Storage **********************/
                            
                            function extraStorage(increasedStorage){
                            
                                let extraStorage = document.getElementById('extra_storage');
                            
                                let StoragePrice = extraStorage.innerText;
                            
                                if(increasedStorage){
                            
                                    extraStorage.innerText = parseInt(StoragePrice) + 100;
                                
                                }
                            
                                else if (increasedStorage){
                            
                                    extraStorage.innerText = parseInt(StoragePrice) + 180;
                            
                                }
                            
                                else{
                            
                                    extraStorage.innerText = parseInt(StoragePrice) * 0;
                            
                                }
                                
                            
                            }
                            
                            
                            document.getElementById('storage_button_256gb').addEventListener('click', function(){
                            
                                
                                
                            
                                extraStorage(false)
                            })
                            
                            
                            
                            document.getElementById('storage_button_512gb').addEventListener('click', function(){
                            
                                /* let extraStorage = document.getElementById('extra_storage');
                                let StoragePrice = extraStorage.innerText; */
                                // extraStorage.innerText = parseInt(StoragePrice) + 100;
                            
                                extraStorage(true)
                            
                            })
                            
                            
                            
                            document.getElementById('storage_button_1tb').addEventListener('click', function(){
                            
                               /*  let extraStorage = document.getElementById('extra_storage');
                                let StoragePrice = extraStorage.innerText; */
                                // extraStorage.innerText = parseInt(StoragePrice) + 180;
                            
                                extraStorage(true)
                            
                            })
                            
                                                        
                                                        
                                                        /*********************** Delivery Option **********************/
                            
                                function deliveryCharge(charges){
                            
                                let extraStorage = document.getElementById('delivery_charge');
                            
                                let StoragePrice = extraStorage.innerText;
                            
                            
                                if(charges){
                            
                                    extraStorage.innerText = parseInt(StoragePrice) + 20;
                            
                                }
                            
                                else if (StoragePrice > 1){
                            
                                    extraStorage.innerText = parseInt(StoragePrice) * 0;
                            
                                }
                                }
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                             
                            
                                document.getElementById('free_delivery').addEventListener('click', function(){
                            
                                /* let extraStorage = document.getElementById('delivery_charge');
                            
                                let StoragePrice = extraStorage.innerText; */
                            
                                // extraStorage.innerText = parseInt(StoragePrice) * 0;
                            
                                deliveryCharge(false)
                            
                                })
                            
                            
                            
                                document.getElementById('charged_delivery').addEventListener('click', function(){
                            
                                /* let extraStorage = document.getElementById('delivery_charge');
                            
                                let StoragePrice = extraStorage.innerText; */
                            
                                // extraStorage.innerText = parseInt(StoragePrice) + 20;
                            
                                deliveryCharge(true)
                            
                                })
                            
                            
                            
                            
                            
                            
                            
                            