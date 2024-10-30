let cartCount = 0;

function updateCartDisplay(amount) {
    cartCount += amount; 
    let cartCountDisplay;
     
    if (cartCount <= 0) {
        cartCountDisplay = ''; 
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
updateCartDisplay(0) //start at ''
