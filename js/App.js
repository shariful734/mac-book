
// memory cost buttons part

const MemoryCostDetail = document.getElementById('memory-cost');

// memory cost button 1

document.getElementById('memory-btn1').addEventListener('click', function () {

    const firstMemoryCostText = MemoryCostDetail.innerText;

    MemoryCostDetail.innerText = 0;

    updateTotal()

})

// memory cost button 2

document.getElementById('memory-btn2').addEventListener('click', function () {

    const firstMemoryCostText = MemoryCostDetail.innerText;

    MemoryCostDetail.innerText = 180;

    updateTotal()

})

// storage cost buttons part

const StorageCostDetail = document.getElementById('storage-cost');

// storage cost button 1

document.getElementById('storage-btn1').addEventListener('click', function () {

    const StorageCostText = StorageCostDetail.innerText;

    StorageCostDetail.innerText = 0;

    updateTotal()

})

// storage cost button 2

document.getElementById('storage-btn2').addEventListener('click', function () {

    const StorageCostText = StorageCostDetail.innerText;

    StorageCostDetail.innerText = 100;

    updateTotal()
})

// storage cost button 3

document.getElementById('storage-btn3').addEventListener('click', function () {

    const StorageCostText = StorageCostDetail.innerText;

    StorageCostDetail.innerText = 180;

    updateTotal()
})

// delivery cost section

const DelivryCostDetail = document.getElementById('delivery-cost');

// delivery cost button 1

document.getElementById('delivery-btn1').addEventListener('click', function () {

    const DelivryCostText = DelivryCostDetail.innerText;

    DelivryCostDetail.innerText = 0;

    updateTotal()
})

// delivery cost button 2

document.getElementById('delivery-btn2').addEventListener('click', function () {

    const DelivryCostText = DelivryCostDetail.innerText;

    DelivryCostDetail.innerText = 20;

    updateTotal()
})

// update total part 

const totalCostDetail = document.getElementById('total-price');

const totalCostDetailText = totalCostDetail.innerText;

const bestPrice = 1299;

function updateTotal() {

    const memoryCost = parseFloat(MemoryCostDetail.innerText);

    const storageCost = parseFloat(StorageCostDetail.innerText);

    const delivryCost = parseFloat(DelivryCostDetail.innerText);

    const totalCost = memoryCost + storageCost + delivryCost + bestPrice;

    totalCostDetail.innerText = totalCost;

    return totalCost;

}

// bottom total and discount part 

const bottomTotalCost = document.getElementById('bottom-total');

const bottomTotalText = bottomTotalCost.innerText;








