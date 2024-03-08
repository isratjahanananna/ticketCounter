const selectedSeat =document.getElementsByClassName("addButton");

for (const btn of selectedSeat){
    btn.addEventListener("click", function (event){
        const seatName = event.target.innerText;

       const selectedContainer =document.getElementById("emptyDiv");
       event.target.setAttribute("disable",false);
       

       const firstSeatCount = getConvertToNumber("seat");
       if (firstSeatCount+1 >4){
        alert("limit is over");
        return;
       }
       event.target.style.backgroundColor="green";
       //update seat left
       const updateSeat = getConvertToNumber("8seat");
       document.getElementById("8seat").innerText = updateSeat -1
      
       const increaseSeat = getConvertToNumber("seat");
       document.getElementById("seat").innerText = increaseSeat +1

       const div = document.createElement("div");

       const p1 = document.createElement("p");
       const p2 = document.createElement("p");
       const p3 = document.createElement("p");

       p1.innerText = seatName ;
       p2.innerText ="economic";
       p3.innerText ="550";

       div.appendChild(p1);
       div.appendChild(p2);
       div.appendChild(p3);

       selectedContainer.appendChild(div);
       div.classList.add("flex");
       div.classList.add("justify-between");

       updateTotalCost();
       updateGrandTotal();
        
    })
}




function updateGrandTotal(status) {
    const totalCost = getConvertToNumber("totalPrice");

    if(status == undefined){
    document.getElementById("grandTotal").innerText = totalCost;
    }
    else {
        const couponnCode = document.getElementById("couponCode").value;
       
        if(couponnCode == "NEW15"){
          const discount = totalCost * .15 ;
          document.getElementById("grandTotal").innerText = totalCost-discount

        }
        else if(couponnCode == "Couple20"){
         
            const discountt = totalCost * .2 ;
            document.getElementById("grandTotal").innerText = totalCost-discountt
        }

        else{
            alert("please enter currect coupon code");
        }
    }
   
}





function updateTotalCost(value){

    const totalCost = getConvertToNumber("totalPrice");
    const sum = totalCost + 550;
    document.getElementById("totalPrice").innerText = sum ;
}




function getConvertToNumber(id) {
const price = document.getElementById(id).innerText;
const convertPrice = parseInt(price);
return(convertPrice);
}