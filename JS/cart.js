function checkout(event) {
    var button = event.target; // Get the clicked button
    var box = button.closest(".box"); // Find the closest .box ancestor

    // Retrieve product information from the .box element
    var ProductName = box.querySelector(".pName").innerText;
    var ProductPrice = parseFloat(box.querySelector(".pPrice").innerText);

    var table = document.getElementById("table").getElementsByTagName("tbody")[0];
    
    // Create a new row in the table
    var row = table.insertRow();
    
    // Insert cells into the row
    var nameCell = row.insertCell(0);
    var priceCell = row.insertCell(1);
    var quantityCell = row.insertCell(2);
    var totalCell = row.insertCell(3);
    
    // Fill the cells with product data
    nameCell.innerHTML = ProductName;
    priceCell.innerHTML = ProductPrice.toFixed(2);
    
    // Create a quantity input field
    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = 1;
    quantityInput.min = 1;
    
    // Create an event listener to update the total price when quantity changes
    quantityInput.addEventListener('input', function() {
      
        
        totalCell.innerHTML = (quantityInput.value * ProductPrice).toFixed(2);
        updateTotals(); // Update the complete total after changing quantity
    });
    // Initial total price calculation
    totalCell.innerHTML = (quantityInput.value * ProductPrice).toFixed(2);
    updateTotals(); 
    // Append the quantity input to the quantity cell
    quantityCell.appendChild(quantityInput);
    
    
   }
   
   
    function updateTotals() {
        var tableBody = document.getElementById("table").getElementsByTagName("tbody")[0];
        var rows = tableBody.getElementsByTagName("tr");
        var completeTotal = 0;

    // Sum the total value of all rows using for loop
    for (var i = 0; i < rows.length; i++) {
        var totalCell = rows[i].getElementsByTagName("td")[3];
        var total = parseFloat(totalCell.innerText);
        completeTotal += total;
    }

    // Update the complete total cell
    document.getElementById("completeTotal").innerText = completeTotal.toFixed(2);
}
   

// Add click event listeners to all buttons
document.querySelectorAll(".btn99").forEach(button => {
    button.addEventListener('click', checkout);
});



document.querySelector('.checkout-btn').addEventListener('click', function() {
    console.log(completeTotal.innerText)
    if (completeTotal.innerText == 0.00) {
        alert("Please add some items to your cart");
        return;
    }

    const container = document.querySelector('.container');
    container.classList.add('apear');
    var c = document.querySelector(".cart1");
    c.style.display = "none";
    

});

document.querySelector('.clos').addEventListener('click', function() {
    const container = document.querySelector('.container');
    container.classList.remove('apear');
    alert("Order placed you'll recive within 30 mintus")
});





function displayCart(){
    var c = document.querySelector(".cart1");
    c.style.display = "block";

}