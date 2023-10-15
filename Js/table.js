let dataCollection=[
    ["Elon", "Musk", 52, "Tesla"],
    ["Mark", "Zuckerberg", 36, "Facebook"],];

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

function ageSort(){

    let tableRows=Array.from(tbody.rows);
    tableRows.sort(function (param1,param2){
        let ageParam1=parseInt(param1.cells[2].textContent,10);
        let ageParam2=parseInt(param2.cells[2].textContent,10);
        return compare(ageParam1,ageParam2);
    });
    while (tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
    for (let i=0;i<tableRows.length;i++){
        tbody.appendChild(tableRows[i]);
    }
}

function compare(num1, num2) {
    if (num1 > num2) return 1;
    else if (num2 > num1) return -1;
    else return 0;
}

adCollection();