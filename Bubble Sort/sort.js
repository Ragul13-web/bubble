function swap() {
    var a, n, i, j, t;
    const v1 = document.getElementsByTagName("input")[0].value;
    const v2 = document.getElementsByTagName("input")[1].value;
    const v3 = {
        for (i = 0; i < n; i++) {
            console.log(a.length);
        }
        for (i = 0; i < n; i++) {
            for (j = 0; j < n - 1; j++) {
                if (a[j] >= a[j + 1]) {
                    t = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = t;
                }
            }
        }
        console.log(a[i]);

        for (i = 0; i < n; i++) {
            console.log(a[i]);
        }
    }
    document.getElementsByTagName("input")[2].value = v3;
}