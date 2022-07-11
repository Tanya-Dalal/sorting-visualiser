async function StartmergeSort(low,high)
{
    await mergeSort(0,  a.length - 1,delay=speed);
    enable();
}
async function mergeSort(l, r){
    if(l>=r){
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    await mergeSort(l,m);
    await mergeSort(m+1,r);
    await merge(l,m,r);
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
}

async function merge(l, m, r)
{
    var bars = document.querySelectorAll(".bar");
    var n1 = m - l + 1;
    var n2 = r - m;
    for(var i=l;i<=r;i++)
    {
        bars[i].style.backgroundColor = "pink";
    }
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = a[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = a[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {

            a[k] = L[i];
            i++;
        }
        else {
            a[k] = R[j];
            j++;
        }
        bars[k].innerText=a[k];
        bars[k].style.height = `${a[k] * 3}px`;
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        a[k] = L[i];
        bars[k].innerText=a[k];
        bars[k].style.height = `${a[k] * 3}px`;
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        a[k] = R[j];
        bars[k].innerText=a[k];
        bars[k].style.height = `${a[k] * 3}px`;
        j++;
        k++;
    }

    for(var i=l;i<=r;i++)
    {
        bars[i].style.backgroundColor = "#5c636d";
    }
}