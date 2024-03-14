
function calculateChange() {
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const amountPaid = parseFloat(document.getElementById('amountPaid').value);

    const change = amountPaid - totalAmount;
    if (change < 0) {
        document.getElementById('changenew').innerHTML = 'Insufficient amount paid.';
    } else {
        document.getElementById('changenew').innerHTML = `TotalAmount: ₹${change.toFixed(2)}`;
    }
}