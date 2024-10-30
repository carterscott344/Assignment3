let cartCount = 0;

function updateCartDisplay(idNumber) {

    increment = getItemCount(idNumber); 
    if (isNaN(increment)) {
        cartCount = cartCount;
    } else {
        cartCount += increment;
    }
    let cartCountDisplay;
     
    if (cartCount <= 0) {
        cartCountDisplay = ''; 
        cartCount = 0;
    } else {
        cartCountDisplay = cartCount;  
    }
    
    const displayElement = document.getElementById('cartCountDisplay');
    displayElement.innerText = cartCountDisplay;

    if (cartCountDisplay === '') {
        displayElement.style.display = 'none';  
    } else {
        displayElement.style.display = 'inline-block';  
    }
}

const itemCounts = {};

function updateCount(idNumber, amount) {
    if (!itemCounts[idNumber]) {
        itemCounts[idNumber] = 0;
    }    
    itemCounts[idNumber] += amount;
 
    if (itemCounts[idNumber] <= 0) {
        itemCounts[idNumber] = 0;
    }

    const displayElement = document.getElementById('item' + idNumber + 'Count');
    if (itemCounts[idNumber] > 0) {
        displayElement.innerHTML = itemCounts[idNumber];
    } else {
        displayElement.innerHTML = "<br />";
    }

}


function getItemCount(idNumber){
    return parseInt(document.getElementById('item' + idNumber +'Count').innerText, 10);
}

updateCartDisplay(1);


