
//  For first Dice Throw

var randomNumber1=Math.floor((Math.random())*6);
randomNumber1=randomNumber1 + 1;
function diceThrow1(){    
    // console.log(randomNumber1);
    
    //Step 3
    var firstImageSrc="images/dice"+randomNumber1+".png";
    
    ///Step 4
    document.querySelector("img.img1").setAttribute("src",firstImageSrc);
}

//  For Second Dice Throw

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
function diceThrow2(){
    var secondImageSrc = "images/dice"+randomNumber2+".png";
    document.querySelector("img.img2").setAttribute("src",secondImageSrc);
}


 diceThrow1();   
 diceThrow2();


 if( randomNumber1 > randomNumber2 ){
     document.querySelector("h1").innerHTML = "Player 1 Won!!";
 }else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Won!!";
}else{
     document.querySelector("h1").innerHTML = "The Match Ends in a Draw";
 }