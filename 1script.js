function calculateresult(){
    let n=document.getElemntaryById("subjects").Value;
    let i;
    let total=0;
    for(i=0 ; i<n ; i++){
   let x= prompt ("Enter subject no." +(i+1));
total+=x ;
}
let avg=total/n;
let grade ; 
if (avg >= 90) {
        grade = "A++";
    } else if (avg >= 80) {
        grade = "A+";
    } else if (avg >= 70) {
        grade = "A";
    } else {
        grade = "B or below";
    }






    let r=document.getelemntaryById("result").innerHTML="total marks"+total+"</br>"+"average marks"+avg 
}