alert("Hacked haha");
let firstNm = prompt("Enter Your First Name");
let lastNm = prompt("Enter Your Last Name");
alert("hi "+ firstNm + lastNm);
let age = prompt("enter your age");
if (age>=18) {
    alert("you can vote");
} else {
    alert("you cannot vote");
}
let state = prompt ("Lets Play if you're ready type 'Ready'");
if (state.toLowerCase() == "ready") {
        alert("lets play: number guess game");
        let num = 25;
      
       for(let i=1; i<=10; i++){
        let choosenNo = prompt("enter the lucky number between 20 to 30");
       if (choosenNo == num){
           alert("You Won");
           break;
            
        }
        else{
            alert((10-i) + " chances remaining!"); 
        }
        
       
    }
 }
