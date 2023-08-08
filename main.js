function sum(num1,num2){
return num1+ num2;
}

console.log(sum(2,2))



function sub(num1,num2){
    return num1 - num2;
    }
    
    console.log(sub(2,2))


    function mult(num1,num2){
        return num1 * num2;
        }
        
        console.log(mult(2,2))


        function divd(num1,num2){
            return num1 / num2;
            }
            
            console.log(divd(2,2))

            //------------------------------------------//

console.log("------------------------------------------")

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let arrOdd= arr.filter(function(x,i) {
return  x%2 !=0;

})

console.log(arrOdd);


let arreEven= arr.filter(function(x,i) {
    return  x%2==0;
    
    })
    
    console.log(arreEven);


    let firstEven= arr.find(function(x,i) {
        return  x%2==0;
        
        })
        
        console.log(firstEven);
    





console.log("------------------------------------------")
arr.forEach(function(x,i){
arr[i]= x * 2;
})

console.log(arr)


console.log("------------------------------------------")

const sotrted = arr.sort(function(a,b){
    return b - a;
})

console.log(sotrted)

 
let evere=arr.every(function(x){
    return x % 2!=0;
})
console.log(evere)
let somere=arr.some(function(x){
    return x % 2==0;
})
console.log(somere)


console.log("-------------------------------------")
/////////////////////////////////////

let myobarr = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];
  
/////// find

console.log("--------------find----------------------")

let findname =myobarr.find(function(x){
return x.eye_color === "blue"
})
//

  
let findMygender =myobarr.find(function(x){
    return x.mass > 50;
    })
    console.log(findname.name,findMygender.gender)
    

console.log("--------------filter----------------------")
    
    ///FILTER

let filterHight = myobarr.filter(function(x){
    return x.height < 200;
})

console.log(filterHight);


let filtermale = myobarr.filter(function(x){
    return x.gender === "male";
})

console.log(filtermale);


console.log("--------------map-----------------------")

//MAP
let mapNames= myobarr.map(function(x){
    return x.name;

})

let mapHights= myobarr.map(function(x){
    return x.height;

})

console.log(mapNames,mapHights);




//SORT
console.log("-----------------sort-----------------")

let sortMass = myobarr.sort(function(b,a){
    return b.mass - a.mass;
})

console.log(sortMass);

let sortHeight = myobarr.sort(function(a,b){
    return a.height - b.height;
})

console.log(sortHeight);





//EVERY

console.log("----------every---------------------------")

let everyMass= myobarr.every(function(x){
return x.mass > 40;
})

console.log(everyMass);



let everyh= myobarr.every(function(x){
    return x.height < 200;
    })
    console.log(everyh);



    

console.log("-------------------some------------------")

//SOME

let someEyes = myobarr.some(function(x){
    return x.eye_color === "blue";
})

console.log(someEyes)


let someTall = myobarr.some(function(x){
    return x.height >210;
})

