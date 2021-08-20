// memory button 1

document.getElementById('memory-btn1').addEventListener('click', function () {

    const memoryCostText1 = document.getElementById('memory-cost').value;

})

// memory button 2

document.getElementById('memory-btn2').addEventListener('click', function () {

    const memoryCostDetail2 = document.getElementById('memory-cost');

    let memoryCostText2 = memoryCostDetail2.innerText;

    memoryCostText2 = parseFloat(memoryCostText2) + 180;






})