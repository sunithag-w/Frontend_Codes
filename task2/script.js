// let arr=[];
// let arr1=new Array("hii","hello");
// console.log(arr1[0]);
// let heroes=["raviteja","Chiranjeevi","nag","allu"];
// console.log(heroes.reverse());
// console.log(heroes);
// console.log(heroes.toSorted());
// console.log(heroes);
// console.log(heroes.sort());
// console.log(heroes);
// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i].toUpperCase());
// }
// for(let  a of heroes){
//     console.log(a.toLowerCase());
// }
// let marks=[1,2,3,4,5];
// let total=0;
// for(let sum of marks){
//     total+=sum;
//     console.log(total);
// }
// console.log(total/marks.length);
// let prices=[250,645,300,900,50];
// let offer=0;
// for(let i=0;i<prices.length;i++){
//     console.log(prices[i]);//before
//     offer=prices[i]/10;
//     prices[i]=prices[i]-offer;
//   console.log(prices[i]);//after
// }

// let array={
//     cursor:"pointer",
//     color:"blue"
// };
// let ar=["cursor","color"];
// let res=ar.map(ar => array[ar]);
// console.log(res);

// let fruit=["apple","banana","cherry"];
// fruit.pop();
// console.log(fruit.toString());
// console.log(fruit);
// let a=[1,2,34];
// let b=[6,7,8,9];
// console.log(a.toString());
// console.log(a.concat(fruit));
// let as=fruit.shift();
// console.log(as);
// console.log(fruit.slice(0,2));
// console.log(fruit.splice(1));

// console.log(fruit);

// let company=["blooberg","microsoft","uber","google","ibm","netflix"];
// console.log(company.shift());
// console.log(company.splice(1,1,"ola"));
// console.log(company.push("amazon"));
// console.log(company)

// let ba="sunithagamapada";
// console.log(ba.split("a").length);

// let str="apna";
// console.log(str);

// let str=prompt("enter the name");
// str="@"+str+str.length;
// console.log(str);


// let countdown=+prompt("enter the countdown number");
// console.log("----Countdown Start---")
// while(countdown>=0){
//     console.log(countdown);
//     countdown--;
// }
// console.log("--countdown End--");


// let attemptleft=+prompt("enter a number");
// let attemptleft=3;
// let islogged=false;
// let correctpassword = "secret123"
// while(attemptleft>0&&islogged==false){
//     let enterpassword=prompt(" enter a pswd");
//     // let correctpassword=prompt("enter a correct pswd");
//     if(enterpassword===correctpassword){
//         islogged=true;
        
//         break;
       
//     }

//         attemptleft--;
    
//     // console.clear();
    
//         console.log("Incorrect password.please try again");
//         console.log(`Enter your password.(${attemptleft} attempt is left)`);
    
//     if(attemptleft == 0){
//         islogged = false;
//     }

// }

// if(islogged==true){   console.log("Login suceessfully");
// }else{
//     console.clear()
//     console.log("Incorrect password .No attempt is left .Account is locked");
// }

// let loadprogress=0;
// let maxloadprog=25;
// console.log("Resource Loading Started");
// while(loadprogress<100){
//    loadprogress+= Math.floor(Math.random()*maxloadprog)+5;
//    console.log(`Loading.....${loadprogress}`);
// }
// console.log("Resource Loading completed");
let target=7;

let attempt=0;
console.log("Generating Random Number");
let current=1;
while(current!==target){
    current=(Math.floor(Math.random()*10)+1);
    attempt++;
    console.log(`Attempt ${attempt}: Generated ${current}`);

}
console.log(`Attempt ${attempt}: Generated ${current}`);




