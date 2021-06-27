

window.onload = function(){

    let bot=document.createElement("P");
    bot.innerHTML="Hello there, I'm Darline";
    bot.classList.add('bottext', 'animate__animated','animate__fadeInDown')
    document.getElementById("sec").appendChild(bot); 

    // document.getElementById("msg").onkeyup=function(){
    //     let owm = document.createElement("P");   
    //     owm.innerText ="typing..."; 
    //     owm.className = "usertext";
    //     document.getElementById("sec").appendChild(owm);
    // }
    

    document.getElementById("msg").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("btn").click();
        }
    });



    document.getElementById("btn").onclick=function(){
        // console.log("Working")

        let umsg;
        umsg=document.getElementById("msg").value;
        

        let msgsec=document.getElementById("sec");

        //ourmsg
        if(umsg==""){
            
        }
        else{
            
            let owm = document.createElement("P");   
            owm.innerText =umsg; 
            document.getElementById('msg').value="";
            owm.classList.add('usertext', 'animate__animated','animate__fadeInUp');
            msgsec.appendChild(owm);
        }
        
        //chat logic    
        // alert(umsg);

        const date=new Date;
        const weekday = ['Sunday', 'Monday', 'Tuesday', 
            'Wednesday', 'Thursday', 'Friday', 'Saturday' 
        ]; 


        if(umsg.match(/Hi/i) || umsg.match(/Hello/i)){
            let bot=document.createElement("P");
            bot.innerHTML="How Can I help you?";
            bot.classList.add('bottext', 'animate__animated','animate__fadeInDown')
            msgsec.appendChild(bot);

        }
        //maths operations
        else if(umsg.match(/[0-9]/g)){
            let bot=document.createElement("P");
            bot.innerHTML= "Answer is "+eval(umsg);
            bot.classList.add('bottext', 'animate__animated','animate__fadeInDown')
            msgsec.appendChild(bot);     
        }

        // else if(umsg.match(/who is/i) || umsg.match(/what is/i)){
        //     let bot=document.createElement("P");
        //     bot.innerHTML= 
        //     bot.classList.add('bottext', 'animate__animated','animate__fadeInDown')
        //     msgsec.appendChild(bot);     
        // }
        else if(umsg.match(/time/i) || umsg.match(/Time/i)){
            let bot=document.createElement("P");
            bot.innerHTML=date.toLocaleTimeString();
            bot.classList.add('bottext', 'animate__animated','animate__fadeInDown')
            msgsec.appendChild(bot);     
        }
        else if(umsg.match(/date/i) || umsg.match(/Date/i) ){
            let bot=document.createElement("P");
            bot.innerHTML=date.toDateString();
            bot.classList.add('bottext', 'animate__animated','animate__fadeInDown')
            msgsec.appendChild(bot);     
        }
        else if(umsg.match(/Day/i) || umsg.match(/day/i) ){
            let bot=document.createElement("P");
            bot.innerHTML=weekday[date.getDay()]
            bot.classList.add('bottext', 'animate__animated','animate__fadeInDown')
            msgsec.appendChild(bot);     
        }
        else if(umsg.match(/Weather/i) || umsg.match(/Weather/i) ){
            let bot=document.createElement("P");
            bot.innerHTML=weekday[date.getDay()]
            bot.classList.add('bottext', 'animate__animated','animate__fadeInDown')
            msgsec.appendChild(bot);     
        }
        else{
            let bot=document.createElement("P");
            bot.innerHTML="404 | Type help to see more";
            bot.classList.add('bottext', 'animate__animated','animate__fadeInDown')
            msgsec.appendChild(bot);
        }

        document.getElementById('box').scrollTo(0,document.getElementById('box').scrollHeight);

    }
}