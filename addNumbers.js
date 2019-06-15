// const readline = require("readline");

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback){
//     if (numsLeft > 0) {
//         reader.question('Choose a number: ', (result) => {

//             sum += parseInt(result);
//             console.log(sum); 
//             addNumbers(sum, numsLeft - 1, completionCallback);
           
//         })
//     } else {
//         completionCallback(sum);
//     }
// }

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// My fileter retyrns an array w elemnts that meet the criteria. 

// function doubler(ele){
//     return ele*2;
// }


// function myEach(array, func){
//     let double = []
//     for (let i=0; i < array.length; i++){
//         double.push(func(array[i]));
        
//     }
//     return double
// }

// console.log(myEach([1, 2, 3], doubler));



function filter(ele){
    if (ele % 2 === 0) {
        return ele
    } else {
        ele.delete
    }
}





function myFilter(array, func){
    let filter = [] 
    for (let i = 0; i < array.length; i++){
        filter.push(func(array[i]))
    }
    return filter
}

console.log(myFilter([1, 2, 3, 4, 5, 6], filter))


