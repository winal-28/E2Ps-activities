let totalPurchaseAmounts = [];
let purchaseAmount;

while(purchaseAmount != 0) {
    purchaseAmount = Number(prompt("Enter purchase amount: (enter 0 to close)"));
    totalPurchaseAmounts.push(purchaseAmount);
} 

// Philippine peso price formatting
let PHP = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
});

for (let i=0; i<totalPurchaseAmounts.length-1; i++) {
    document.write(`Customer #${i+1}: ${PHP.format(totalPurchaseAmounts[i])} <br>`)
    if (totalPurchaseAmounts[i] >= 5000) {
        document.write("Gold Suki Discount (10%)")
    } else if (totalPurchaseAmounts[i] >= 2000 && totalPurchaseAmounts[i] < 5000) {
        document.write("Silver Suki Discount (5%)")
    } else if (totalPurchaseAmounts[i] >= 1000 && totalPurchaseAmounts[i] < 2000) {
        document.write("Bronze Suki Discount (2%)")
    } else {
        document.write("No Discount")
    }

    document.write("<br><br>")
}

document.write(`Total Customers Processed: ${totalPurchaseAmounts.length-1}`)

