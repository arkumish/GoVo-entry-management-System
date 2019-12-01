var ID = function(elementId) { 
    return document.getElementById(elementId); 
};

function checkin(){
    
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

        if(data.done === 1 ){
            obj.hostphone = data.hostphone;
             $.post("/sendsms",obj,function(info,status){
                   alert(info)
             });
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