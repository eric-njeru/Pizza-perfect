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
