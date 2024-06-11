
let board=document.getElementById("board");

for(let i=1;i<=8;i++){

    const cell_row=document.createElement('div');
    cell_row.className="cell_row";

    for(let j=1;j<=8;j++){
        const cell=document.createElement('div');
        cell.className="cell";
        
        cell_row.append(cell);
        if(i%2===0){
            if(j%2==0){
                cell.style.backgroundColor="black";
            }
        }
        else{
            if(j%2===0){
             cell.style.backgroundColor="white";
            }else{
                cell.style.backgroundColor="black";
            }
        }

    }
    board.append(cell_row);

}