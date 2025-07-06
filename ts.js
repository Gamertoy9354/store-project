document.addEventListener("DOMContentLoaded", function() {
    let totalAmount = 0;
    const totalCell = document.getElementById("totalAmount");
    const tableBody = document.getElementById("tableBody");
    const int = document.getElementById("inputter");

    let items = [
        { id: 'TEA', price: 10 },
        { id: 'COFFEE', price: 15 },
        { id: 'MILK', price: 20 },
        { id: 'BUTTER_MILK', price: 10 },
        { id: 'SP_LASSI', price: 30 },
        { id: 'LASSI', price: 15 },
        { id: 'MAGGI', price: 20 },
        { id: 'POHA', price: 20 },
        { id: 'SAMOSA', price: 20 },
        { id: 'BHAJI_PAU', price: 20 },
        { id: 'IDLI_SAMBHAR', price: 20 },
        { id: 'KHAMAN_BHAJIYA', price: 20 },
        { id: 'PANI_PURI', price: 10 },
        { id: 'BHEL', price: 20 },
        { id: 'DAHI_PURI', price: 20 },
        { id: 'CHATNI_PURI', price: 20 },
        { id: 'DAL_BHAT', price: 25 },
        { id: 'PURI_BHAJI', price: 25 },
        { id: 'ROTI_SABJI', price: 30 },
        { id: 'EXTRA_ROTI', price: 5 },
        { id: 'EXTRA_PAO', price: 5 },
        { id: 'GUJARATI_THALI', price: 100 },
    ];

    function createTable() {
        items.forEach(item => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id.replace('_', ' ')}</td>
                <td><button id="ADD_${item.id}">Add</button></td>
                <td><button id="REMOVE_${item.id}">Remove</button></td>
                <td id="${item.id}_Quantity">0 Dish(s)</td>
            `;
            tableBody.appendChild(row);

            let quantity = 0;
            const ADDButton = document.getElementById('ADD_' + item.id);
            const REMOVEButton = document.getElementById('REMOVE_' + item.id);
            const QuantityCell = document.getElementById(item.id + '_Quantity');

            ADDButton.addEventListener("click", function() {
                quantity += 1;
                QuantityCell.textContent = quantity + " Dish(s)";
                totalAmount += item.price;
                totalCell.textContent = totalAmount + " Rs";
            });

            REMOVEButton.addEventListener("click", function() {
                if (quantity > 0) {
                    quantity -= 1;
                    QuantityCell.textContent = quantity + " Dish(s)";
                    totalAmount -= item.price;
                    totalCell.textContent = totalAmount + " Rs";
                }
            });
        });
    }

    createTable();

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
});
