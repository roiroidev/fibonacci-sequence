var count = 0;
var fibo = 0;

function fibonacci(n) {
    switch(n) {
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

var j = 0;
function add(){
    count++;
    
    document.getElementById("elementNumber").innerHTML = count;
    document.getElementById("fibo").innerHTML = fibonacci(count);
    for (j = 1; j < count; j++) {
        //document.getElementById("fibo").innerHTML = fibonacci(j);
        for (var i = 0; i < fibonacci(j); i++) {
            var img = document.createElement("img");
            img.setAttribute("src", "usagi_a.png");
            img.style.height = '30px';
            img.style.width = '25px';
            document.getElementById("usagi").appendChild(img);
            var num = document.createElement("p");
            num.innerHTML = fibo
        }
    }

}

function reset(){
    count = 0;
    document.getElementById("elementNumber").innerHTML = "0";
    document.getElementById("fibo").innerHTML = "0";
    document.getElementById("usagi").innerHTML = "";
}