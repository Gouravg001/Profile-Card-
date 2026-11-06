alert("Hacked");
let a = prompt("Enter Your Name");
alert("hi "+ a);
let b = prompt("enter your age");
if (b>=18) {
    alert("you can vote");
} else {
    alert("you cannot vote");
}
let state = prompt ("Lets Play if you're ready type READY");
if (state == "READY") {
        alert("lets play: number guess game");
        let num = 25;
      
       for(let i=1; i<=10; i++){
        let choosenNo = prompt("enter the lucky number between 20 to 30");
       if (choosenNo == num){
           alert("You Won");
           return;
            
        }
        else{
            alert((10-i) + " chances remaining!"); 
        }
        
       
    }
 }
