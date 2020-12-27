let global_counter = 0;

const fibonacci = (n) => {
    switch(n) {
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


const add = () => {
    global_counter++;
    document.getElementById("usagi").innerHTML = "";
    document.getElementById("elementNumber").innerHTML = global_counter;
    document.getElementById("fibo").innerHTML = fibonacci(global_counter);
    for (let i = 0; i < fibonacci(global_counter); i++) {
        let img = document.createElement("img");
        img.setAttribute("src", "./images/usagi_a.png");
        img.style.height = '30px';
        img.style.width = '25px';
        document.getElementById("usagi").appendChild(img);
    }
}

const reset = () => {
    global_counter = 0;
    document.getElementById("elementNumber").innerHTML = "0";
    document.getElementById("fibo").innerHTML = "0";
    document.getElementById("usagi").innerHTML = "";
}