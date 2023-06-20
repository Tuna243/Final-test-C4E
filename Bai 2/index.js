const form = document.getElementById("container-solve");
function numberOneTriangle()
{
    const H = Number(document.getElementById("nA").value);
    console.log(H);
    for(let i = 1; i <= H; i++){
        for(let k = 1; k <= i;k++){
            document.write("*");
        } 
        document.write("<br/>");
    }
}
form.addEventListener("submit",numberOneTriangle);