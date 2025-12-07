let names = []
let stockLevels = []
let reorderLevels = []

let itemNum = Number(prompt("Number of items to input:"))

for (let i=0; i<itemNum; i++) {
    let name = prompt("Enter item name: ")
    names.push(name)
    let stockLevel = Number(prompt("Enter item stock level: "))
    stockLevels.push(stockLevel)
    let reorderLevel = Number(prompt("Enter reorder level:"))
    reorderLevels.push(reorderLevel)
}

//Output
document.write("<h1>Items info: <br></h1>")

for (let i=0; i<itemNum; i++) {
    document.write(i+1 + ". " + "<b>Item name: " + names[i] + "</b><br>")
    document.write("Stock level: " + stockLevels[i] + "<br>")
    let status;  
    if (stockLevels[i] == 0) {
        status = "Critical";
    } else if (stockLevels[i] <= reorderLevels[i]) {
        status = "Low"
    } else {
        status = "Okay"
    }
    document.write("Status: " + status + "<br><br>")
}


// document.write(names + "<br>")
// document.write(stockLevels + "<br>")
// document.write(reorderLevels + "<br>")
