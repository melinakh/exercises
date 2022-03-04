input1="Abarse boazarr"
input2="r"

function howMany(input1,input2) {
    let counter=0;
    for (let i of input1) { 
        // for (let i in input1) => اگر میخوای بهت مکانشو بده ازین استفاده میکنی
        // if (input1[i]===input2) => با این شرایط 
        if (i===input2) { 
           counter++
        }
    }
    return counter
} console.log(howMany( input1,input2))