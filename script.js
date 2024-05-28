document.addEventListener("DOMContentLoaded", function() {
    let totalAmount = 0;
    const totalCell = document.getElementById("totalAmount");
    const check = document.getElementById("checkB");
    const names = document.getElementById("names");

    let items = [
        { id: 'TEA', price: 10 },
        { id: 'COFFE', price: 15 },
        { id: 'MILK', price: 20 },
        { id: 'BATTER_MILK', price: 10 },
        { id: 'SP_LASSI', price: 30 },
        { id: 'LASSI', price: 15 },
        { id: 'MAGGE', price: 20 },
        { id: 'POUA', price: 20 },
        { id: 'SAMOSA', price: 20 },
        { id: 'BHAJI_PAU', price: 20 },
        { id: 'IDALI_SABHAR', price: 20 },
        { id: 'KHAMAN_BHAJIYA', price: 20 },
        { id: 'PANI_PURI', price: 10 },
        { id: 'BHEL', price: 20 },
        { id: 'DHAHI_PURI', price: 20 },
        { id: 'CHATANI_PURI', price: 20 },
        { id: 'DAL_BHAT', price: 25 },
        { id: 'PURI_BHAJI', price: 25 },
        { id: 'ROTI_SABJI', price: 30 },
        { id: 'EXTRA_ROTI', price: 5 },
        { id: 'EXTRA_PAO', price: 5 },
        { id: 'GUJARATI_THALI', price: 100 },
    ];

    items.forEach(item => {
        let quantity = 0;
        const ADDButton = document.getElementById('ADD_' + item.id);
        const REMOVEButton = document.getElementById('REMOVE_' + item.id);
        const QuantityCell = document.getElementById(item.id + '_Quantity');

        ADDButton.addEventListener("click", function() {
            quantity += 1;
            QuantityCell.textContent = quantity + " Dish(s)";
            totalAmount += item.price;
            totalCell.textContent = totalAmount + " Rs";
            console.log(`Added ${item.id}, new quantity: ${quantity}`);
        });

        REMOVEButton.addEventListener("click", function() {
            if (quantity > 0) {
                quantity -= 1;
                QuantityCell.textContent = quantity + " Dish(s)";
                totalAmount -= item.price;
                totalCell.textContent = totalAmount + " Rs";
                console.log(`Removed ${item.id}, new quantity: ${quantity}`);
            }
        });
    });

    check.addEventListener("click", function(){
        let itemname = [];
        items.forEach(item => {
            const QuantityCell = document.getElementById(item.id + '_Quantity');
            const quantity = parseInt(QuantityCell.textContent) || 0;
            if (quantity > 0) {
                itemname.push(item.id);
                console.log(`Added ${item.id} to the list`);
            }
        });
        names.textContent = itemname.join(', ');
        console.log(`Final item names: ${names.textContent}`);
    });

    // Clear All button functionality
    const clearAllButton = document.getElementById('clearAll');
    clearAllButton.addEventListener('click', function() {
        // Reset all quantities to 0 and update display
        items.forEach(item => {
            const QuantityCell = document.getElementById(item.id + '_Quantity');
            QuantityCell.textContent = "0 Dish(s)";
        });

        // Reset total amount to 0 and update display
        totalAmount = 0;
        totalCell.textContent = totalAmount + " Rs";
    });
    check.addEventListener("click", function(){
        
    });
});
