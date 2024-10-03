1.
function sumEvenNumber(){
    let totalsum=0;
    for(let i =1;i<=20;i++){
        if(i%2==0){
            totalsum +=i;
        }
    }
    console.log(totalsum);
}
sumEvenNumber();

2.
function multiplesOf3(n){
    for(let i=1;i<=n;i++){
     let multiple = i * 3;
    console.log(multiple);
    }

}
let n=5;
multiplesOf3(n);

3.
let  teamScore=178;
let targetScore=250;
let  oversLeft=0;
if (teamScore >= targetScore){
    console.log( "Team wins by DL method");
}
else if(teamScore < targetScore && oversLeft > 0){
    console.log("Match to be continued")
}
else if (teamScore < targetScore && oversLeft === 0) {
    console.log("Team loses by DL method");
}   

