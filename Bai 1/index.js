const form = document.getElementById("container-solve");
const ans = document.getElementById("nAns");
function isPrime(n)
{
    let flag = true;
    if (n < 2){
        flag = false;
    }
    else if (n === 2){
        flag = true;
    }
    else if (n % 2 === 0){
      flag = false;
    }
    else{
        for (let i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i === 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true){
        return 1;
    }
    else{
        return 0;
    }
}
 function Sum(x,y)
{
    let sum = 0; 
    for (let key = x; key <= y; key ++)
     {
        if(isPrime(key) == 1 )
        {
            sum += key;
        }
    }
    return sum;
}
function check ()
{
    let a = Number(document.getElementById("nA").value);
    let b = Number(document.getElementById("nB").value); 
    console.log(a,b);
    if(a > b)
    {
        alert("please enter the number a is less than b");
        a = 0;
        b = 0;
    }
    else
    {
        console.log(Sum(a,b));
        ans.innerHTML = Sum(a,b).toString();
        
    }
}

form.addEventListener("submit",check);