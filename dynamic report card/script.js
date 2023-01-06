


document.querySelector('#btn').addEventListener('click', function (data) {
    let uname = document.querySelector('#name').value;
    let eng = Number(document.querySelector('#eng').value);
    let phy = Number(document.querySelector('#phy').value);
    let che = Number(document.querySelector('#eng').value);
    let math = Number(document.querySelector('#math').value);


    let total = eng + phy + che + math;
    let avg = total / 4;
    let status = ""
    if(avg>50){
        // document.querySelector('#status').innerText='Pass';
        status = "pass"
     }
     else{
        status="fail"
    
     }

    console.log(uname);
    // document.querySelector('#usName').textContent = `${uname}  `
    document.querySelector('#table-data').innerHTML = `
        
        
            <tr>
            <td> ${uname} </td>
            <td> ${total} </td>
            <td> ${avg} </td>
            <td> ${status} </td>
            </tr>
    `

 
     
}
)
