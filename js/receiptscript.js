function getReceipt() {
    orderText = ""; // These initialize as empty strings but get passed from  
    subtotalText = ""; // function to function, growing line by line into a full receipt
    var runningTotal = 0;
    var sizeTotal = 0;
      var sizeArray = document.getElementsByName("size");
  // loop over them all
  for (var i=0; i<sizeArray.length; i++) {
     // And stick the checked ones onto an array...
     if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
        orderText = orderText+selectedSize+"<br>";
     }
  }
  if (selectedSize === "personal") {
          sizeTotal = 6;
          subtotalText = subtotalText+sizeTotal+"<br>";
  } else if (selectedSize === "medium") {
          sizeTotal = 10;
          subtotalText = subtotalText+sizeTotal+"<br>";
  } else if (selectedSize === "large") {
          sizeTotal = 14;
          subtotalText = subtotalText+sizeTotal+"<br>";
  } else if (selectedSize === "xlarge") {
          sizeTotal = 16;
          subtotalText = subtotalText+sizeTotal+"<br>";
  }
  runningTotal = sizeTotal;
  getCrust(runningTotal,orderText,subtotalText)
};

function getCrust(runningTotal,orderText,subtotalText) {
    var crustTotal = 0;
    var selectedCrust;
    var crustArray = document.getElementsByName("crust");
    for (var j = 0; j < crustArray.length; j++) {
        if (crustArray[j].checked) {
            selectedCrust = crustArray[j].value;
            orderText = orderText + selectedCrust + "<br>";
        }
        if (selectedCrust === "stuffed") {
            crustTotal = 3;
        }
    }
    runningTotal = (runningTotal + crustTotal);
    subtotalText = subtotalText + crustTotal + "<br>";
  getSauce(runningTotal,orderText,subtotalText);
};

function getSauce(runningTotal,orderText,subtotalText) {
    var sauceArray = document.getElementsByName("sauce");
    for (var j = 0; j < sauceArray.length; j++) {
        if (sauceArray[j].checked) {
            selectedSauce = sauceArray[j].value;
            orderText = orderText + selectedSauce +"<br>";
        }
    }
    subtotalText = subtotalText + 0 + "<br>";
    getMeat(runningTotal,orderText,subtotalText);
};

function getMeat(runningTotal,orderText,subtotalText) {
    var runningTotal = runningTotal;
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByName("meat");
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    for (var j = 0; j < selectedMeat.length; j++) {
            orderText = orderText+selectedMeat[j]+"<br>";
            if (meatCount <= 1) {
                subtotalText = subtotalText + 0 + "<br>";
                meatCount = meatCount - 1;
            } else if (meatCount == 2) {
                subtotalText = subtotalText + 1 + "<br>";
                meatCount = meatCount - 1;
            } else {
                subtotalText = subtotalText + 1 + "<br>";
                meatCount = meatCount - 1;
            }
    }
    getVeggie(runningTotal,orderText,subtotalText);
};

function getVeggie(runningTotal,orderText,subtotalText) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByName("veggies");
    for (var j = 0; j < veggieArray.length; j++) {
        if (veggieArray[j].checked) {
            selectedVeggie.push(veggieArray[j].value);
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    for (var j = 0; j < selectedVeggie.length; j++) {
            orderText = orderText+selectedVeggie[j]+"<br>";
            if (veggieCount <= 1) {
                subtotalText = subtotalText + 0 + "<br>";
                veggieCount = veggieCount - 1;
            } else if (veggieCount == 2) {
                subtotalText = subtotalText + 1 + "<br>";
                veggieCount = veggieCount - 1;
            } else {
                subtotalText = subtotalText + 1 + "<br>";
                veggieCount = veggieCount - 1;
            }
    }
    getCheese(runningTotal,orderText,subtotalText);
};

function getCheese(runningTotal,orderText,subtotalText) {
    var cheeseTotal = 0;
    var selectedCheese = [];
    var cheeseArray = document.getElementsByName("cheese");
    for (var j = 0; j < cheeseArray.length; j++) {
        if (cheeseArray[j].checked) {
            selectedCheese = cheeseArray[j].value;
        }
        if (selectedCheese === "extra") {
            cheeseTotal = 3;
        }
    }
    runningTotal = (runningTotal + cheeseTotal);
    subtotalText = subtotalText+cheeseTotal+"<br>";
    orderText = orderText+selectedCheese+"<br>";
    document.getElementById("showOrderText").innerHTML=orderText;
    document.getElementById("showSubtotalText").innerHTML=subtotalText;
    document.getElementById("totalPrice").innerHTML = "</h3>Ksh "+runningTotal+"00.00"+"</h3>";
};