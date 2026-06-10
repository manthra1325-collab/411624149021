console.log("Manthra")

const a=20;
const b=80;
console.log(a+b)

const str ="Harini"
console.log(str)

const arr=[1,2.4,"manthra", false]
console.log(arr)

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

arr.push("Mayuthra")
console.log(arr)
arr.pop()
console.log(arr)

function example()
{
    console.log("Hello everyone this is my js")
}example()

const ptag=document.getElementById("ptag")
ptag.innerHTML ="Manthravarthini.A.P"

const input =document.getElementById("input")
const  output =document.getElementById("inputField")
input.addEventListener("input",()=>{
    output.textContent=input.value})


    const first=document.createElement("h")
    first.textContent="Helloooo"
    document.body.appendChild(first)

    