async function InsertionSort(delay = speed) {
    var bars = document.querySelectorAll(".bar");
  
    // InsertionSort Algorithm

        for (let i = 1; i < a.length; ++i) {
            var key = a[i];
            var j = i - 1;
            bars[i].style.backgroundColor = "red";
            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
               await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, delay)
                );
            while (j >= 0 && a[j] > key) {
                bars[j].style.backgroundColor = "red";
                a[j + 1] = a[j];
                if(i!=1)
                    bars[j+1].style.backgroundColor = "#5c636d";
                swap(bars[j], bars[j + 1]);
                
                bars[j+1].innerText=a[j+1];
                bars[j].innerText=a[j];
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, delay)
                );
                j = j - 1;
                for(var k=i;k>=0;k--){
                    bars[k].style.backgroundColor = "#5c636d";
                  }
            }
            a[j + 1] = key;
            bars[j+1].innerText=key;
            bars[j+1].style.height = `${a[j+1] * 3}px`;
            bars[i].style.backgroundColor = "#5c636d";
        }
        enable();
}