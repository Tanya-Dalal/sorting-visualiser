async function BubbleSort(delay = speed) {
    var bars = document.querySelectorAll(".bar");
  
    // BubbleSort Algorithm
    for (var i = 0; i < a.length; i += 1) {
        for (var j = 0; j < a.length - i - 1; j += 1) {
  
            // To change background-color of the
            // blocks to be compared
            bars[j].style.backgroundColor = "red";
            bars[j + 1].style.backgroundColor = "red";
  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
  
            console.log("run");
            var value1 = a[j];
            var value2 = a[j+1];
  
            // To compare value of two blocks
            if (value1 > value2) {
                swap(bars[j], bars[j + 1]);
                var temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
  
            // Changing the color to the previous one
            bars[j].style.backgroundColor = "#C3C2F2";
            bars[j].innerText=a[j];
            bars[j].style.height = `${a[j] * 3}px`;
            bars[j + 1].style.backgroundColor = "#C3C2F2";
            bars[j+1].innerText=a[j+1];
            bars[j+1].style.height = `${a[j+1] * 3}px`;
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        bars[bars.length - i - 1]
                .style.backgroundColor = "#5c636d";
    }
    enable();
}

