var a = new Array;

function sort() {
    for (i = 0; i < 5; i++) {
        a[i] = document.getElementsByTagName("input")[i].value;
    }
    document.write("<h2>Given Array :</h2><br>" + a);

    for (i = 0; i <= a.length; i++) {
        for (j = 0; j < a.length; j++) {
            if (a[j] > a[j+1]) {
                var temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    document.write("<h2>Sorted Array :</h2><br>" + a);
}
