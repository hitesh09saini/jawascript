let name =  "hitesh";
    
localStorage.setItem("name","monu");

function login(){
       if(localStorage.getItem("name")===name){

           console.log("find");
       }else{
           console.log("not find");
       }

  }

  login();