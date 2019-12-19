function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
} 
console.log(bubble_Sort([11, 3, 4, 1, 201, 100, 4, 7, 42, 85, 12, 583, 13, 104, 31, 76, 49]));
