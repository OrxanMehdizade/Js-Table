let dataCollection=[
    ["Elon", "Musk", 52, "Tesla"],
    ["Mark", "Zuckerberg", 36, "Facebook"],
    ["Aark", "Zuckerberg", 36, "Facebook"],
    ["Mark", "Auckerberg", 36, "Facebook"],];

let table=document.getElementById('myTable')
let tbody=table.getElementsByTagName('tbody')[0];


function adCollection(){
    for(let i=0;i<dataCollection.length;i++){
        let tableRow=tbody.insertRow(i);
        tableRow.classList.add("table-row");
        for (let j=0;j<dataCollection[i].length;j++){
            let tableCell= tableRow.insertCell(j);
            tableCell.classList.add("table-cell");
            tableCell.innerHTML=dataCollection[i][j];
        }
    }
}






function sortTable(index){
    let tableRows = Array.from(tbody.rows);
    tableRows.sort(function (row1,row2){
        let rowvalue1=row1.cells[index].textContent.trim();
        let rowvalue2=row2.cells[index].textContent.trim();
        if(!isNaN(rowvalue1) && !isNaN(rowvalue2)){
            return compare(parseInt(rowvalue1,10),parseInt(rowvalue2,10))
        }
        else{
            return compare(rowvalue1,rowvalue2);
        }
    })
    while (tbody.firstChild){
        tbody.removeChild(tbody.firstChild)
    }


    for (let i = 0; i < tableRows.length; i++) {
        tbody.appendChild(tableRows[i]);
    }
}

function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}




adCollection();