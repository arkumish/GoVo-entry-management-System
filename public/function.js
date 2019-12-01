var ID = function(elementId) { 
    return document.getElementById(elementId); 
};

function checkin(){
    
    var sendemail = 1;
    var sendsms = 0;

    console.log(' i am here ');
    var obj = {
       Name : ID('vsname').value,
       Phone : ID('vsphone').value,
       Email : ID('vsemail').value,
       Address : ID('vsadd').value,
       hostemail : ID('hsemail').value,
       CheckInTime :new Date(),
       
}

console.log(obj);
    $.post("/CheckIn",obj, function(data, status){
        alert("Data: " + data.outcome );
         console.log(data);
        if(data.done && sendemail == 1 ){

        var mssg = "Someone wants to meet you" + "\nName : " + obj.Name +"\nEmail : " + obj.Email + "\nPhone : " + obj.Phone + "\nCheckIn : " + obj.CheckInTime;

        
            var body = {
                tosend : obj.hostemail,
                message : mssg        
             }

                console.log(mssg,body);
                    
                $.post("/sendemail",{tosend : obj.hostemail,
                        message : mssg},function(info,status2){
                           alert(info);
                      //condition to control sending sms
                    if(sendsms == 1){
                           $.post("/sendsms",{tosend : data.hostphone,
                            message : mssg},function(infoq,statusq){
                               if(status == 200 )
                               alert("SMS Send Successfully");
                        }) }
                    //  });

            })

            
            
             
        }

      });

}

function checkout(){
    
    var obj = {
       Name : ID('vname').value,
       Email : ID('vemail').value,
       
}

console.log(obj);
    $.post("/CheckOut",obj, function(data, status){
        alert("Data: " + data );
 if(data.done){

    var mssg = "Check Out Sucessfull \n Your Details : " + "\nName : " + data.vdetail.Name +"\nEmail : " + data.vdetail.Email + "\n Phone : " + data.vdetail.Phone + "\n CheckIn : " + data.vdetail.CheckIn + "\n CheckOut : " + data.vdetail.CheckOut;


        $.post("/sendemail",{tosend : data.email,
            message : mssg},function(info,status2){
               alert(info);
        });
              
            }

})


      });

}

function addhost(){
    var obj = {
        Name : ID('hname').value,
        Phone : ID('hphone').value,
        Email : ID('hemail').value,
        Address : ID('hadd').value,
        
 }
 
 console.log(obj);
     $.post("/AddHost",obj, function(data, status){
         alert("Data: " + data );
       });

}