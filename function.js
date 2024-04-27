function calculate(){

    var x = parseInt(document.getElementById("number").value);
    var z = x-1;

    var c = 5000*z;

    var d = z*5000*0.05;

    var t = 5000 + d;

    var y = t + (x/24)*10000;
    

    if(x==1){

        alert("Amount to be paid for 1 hour is 5000 Tsh" );
    }
    else if (x>1 && x<25){
               
                alert("Amount to be Paid for " +x+ " Hours Is " +t+ " Tsh");
            }
            else{

                

                alert("Amount to be Paid for " +x+ " Hours Is " +y+ "Tsh");

            }



}