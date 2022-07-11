async function SelectionSort(delay = speed) {
    var bars = document.querySelectorAll(".bar");
  
    // SelectionSort Algorithm

    var min_idx = 0;
   for (var i = 0; i < a.length; i += 1) {
  
    // Assign i to min_idx
    min_idx = i;
  
    // Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < a.length; j += 1) {
  
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";
        
      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
  
      // To store the integer value of jth bar to var1 
      var val1 = a[j];
  
      // To store the integer value of (min_idx)th bar to var2 
      var val2 = a[min_idx];
        
      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
  
          // Provide fadedblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = "#C3C2F2";
        }
        min_idx = j;
      } else {
  
        // Provide fadedblue color to the jth bar
        bars[j].style.backgroundColor = " #C3C2F2";
      }
    }
    
    var temp=a[i];
    a[i]=a[min_idx];
    a[min_idx]=temp;
    // To swap ith and (min_idx)th bar
    swap(bars[i], bars[min_idx]);
    bars[i].innerText=a[i];
    
   
    bars[min_idx].innerText=a[min_idx];
   
      
    // To pause the execution of code for 100 milliseconds
    
  
    // Provide faded blue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = "#C3C2F2";
  
    // Provide dark grey color to the ith bar
    bars[i].style.backgroundColor = "#5c636d";
  }
  enable();
    }


