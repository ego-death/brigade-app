document.querySelector('button').addEventListener('click', getData);

async function getData(){
    document.querySelector('ul').innerHTML="";
    const res = await fetch('http://localhost:8000/display');
    const arr = await res.json();
    for(const el of arr){
        document.querySelector('ul').innerHTML+=`<li><span>flatno: ${el.flatno}</span><br>
        <span>parkingno: ${el.parkingno}</span><br>
        <span>fullname:${el.fullname}</span><br>
        <span>peopleno:${el.peopleno}</span><br>
        <span>petsno:${el.petsno}</span><br>
        <span>sqfeet:${el.sqfeet}</span><br>
        <span>flattype:${el.flattype}</span><br></li><br>`
    }
    console.log('Done printing.');
}