
async function lometo_partition(l, r, delay = speed) {
    var bars = document.querySelectorAll(".bar");
    
    // Storing the value of pivot element
    var pivot = a[r];
    var i = l - 1;
    bars[r].style.backgroundColor = "red";
    
    
    for (var j = l; j <= r - 1; j++) {
      // To change background-color of the
      // bars to be compared
      bars[j].style.backgroundColor = "yellow";
      // To wait for 700 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      var value = a[j];
    
      // To compare value of two bars
      if (value < pivot) {
        i++;
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        bars[i].innerText=a[i];
        bars[i].style.height = `${a[i] * 3}px`;
        bars[j].innerText=a[j];
        bars[j].style.height = `${a[j] * 3}px`;
        
        bars[i].style.backgroundColor = "orange";
        if (i != j) bars[j].style.backgroundColor = "pink";
        //To wait for 700 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
      } else bars[j].style.backgroundColor = "pink";
    }
    // Swapping the ith with pivot element
    i++;
    let temp = a[i];
    a[i] = a[r];
    a[r] = temp;
    bars[i].innerText=a[i];
    bars[r].innerText=a[r];
    bars[i].style.height = `${a[i] * 3}px`;
    bars[r].style.height = `${a[r] * 3}px`;
    bars[r].style.backgroundColor = "pink";
    bars[i].style.backgroundColor = "green";
    
    // To wait for 900 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay )
    );
    
    for (var k = 0; k < a.length ; k++) 
        bars[k].style.backgroundColor = "#6b5b95";
    return i;
  }
    
  // Asynchronous QuickSort function
  async function QuickSort(l, r, delay=100) {
    if (l < r) {
      // Storing the index of pivot element after partition
      var pivot_idx = await lometo_partition(l, r);
      // Recursively calling quicksort for left partition
      await QuickSort(l, pivot_idx - 1);
      // Recursively calling quicksort for right partition
      await QuickSort(pivot_idx + 1, r);
    }
  }
async function StartquickSort(low,high)
{
    await QuickSort(0,  a.length - 1);
    enable();
}