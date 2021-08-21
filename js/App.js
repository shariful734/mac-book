
// memory buttons part

// memory button 1

document.getElementById('memory-btn1').addEventListener('click', function () {

    const firstMemoryCostDetail = document.getElementById('memory-cost');

    const firstMemoryCostText = firstMemoryCostDetail.innerText;

    firstMemoryCostDetail.innerText = 0;


})

// memory button 2

document.getElementById('memory-btn2').addEventListener('click', function () {

    const secondMemoryCostDetail = document.getElementById('memory-cost');

    const secondMemoryCostText = secondMemoryCostDetail.innerText;

    secondMemoryCostDetail.innerText = 180;

})

// storage buttons part

// storage button 1

document.getElementById('storage-btn1').addEventListener('click', function () {

    const firstStorageCostDetail = document.getElementById('storage-cost');

    const firstStorageCostText = firstStorageCostDetail.innerText;

    firstStorageCostDetail.innerText = 0;
})

// storage button 2

document.getElementById('storage-btn2').addEventListener('click', function () {

    const secondStorageCostDetail = document.getElementById('storage-cost');

    const secondStorageCostText = secondStorageCostDetail.innerText;

    secondStorageCostDetail.innerText = 100;
})

// storage button 3

document.getElementById('storage-btn3').addEventListener('click', function () {

    const thirdStorageCostDetail = document.getElementById('storage-cost');

    const thirdStorageCostText = thirdStorageCostDetail.innerText;

    thirdStorageCostDetail.innerText = 180;
})