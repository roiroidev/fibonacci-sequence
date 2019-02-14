var count = 0;

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


function add(){
    count++;
    document.getElementById("usagi").innerHTML = "";
    document.getElementById("elementNumber").innerHTML = count;
    document.getElementById("fibo").innerHTML = fibonacci(count);
    for (var i = 0; i < fibonacci(count); i++) {
        var img = document.createElement("img");
        img.setAttribute("src", "usagi_a.png");
        img.style.height = '30px';
        img.style.width = '25px';
        document.getElementById("usagi").appendChild(img);
    }
}

function reset(){
    count = 0;
    document.getElementById("elementNumber").innerHTML = "0";
    document.getElementById("fibo").innerHTML = "0";
    document.getElementById("usagi").innerHTML = "";
}