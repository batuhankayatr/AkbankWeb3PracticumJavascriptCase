
oddishOrEvenish(373)
function oddishOrEvenish(number){
    let sum =0
    number=number.toString()

    for(let i=0;i<number.length;i++){
        let temp=number.charAt(i)
        temp = parseInt(temp)
        sum=sum+temp
       }    
    if(sum%2==0){
        return "even";
       }
    else{
        return "odd";
       }

}   
