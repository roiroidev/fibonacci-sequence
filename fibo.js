let globalCounter = 0;

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
    globalCounter++;
    document.getElementById("usagi").innerHTML = "";
    document.getElementById("elementNumber").innerHTML = globalCounter;
    document.getElementById("fibo").innerHTML = fibonacci(globalCounter);
    for (let i = 0; i < fibonacci(globalCounter); i++) {
        let img = document.createElement("img");
        img.setAttribute("src", "./images/usagi_a.png");
        img.style.height = '30px';
        img.style.width = '25px';
        document.getElementById("usagi").appendChild(img);
    }
}

const reset = () => {
    globalCounter = 0;
    document.getElementById("elementNumber").innerHTML = "0";
    document.getElementById("fibo").innerHTML = "0";
    document.getElementById("usagi").innerHTML = "";
}

module.exports = {
    globalCounter: globalCounter,
    fibonacci: fibonacci,
    add: add,
    reset: reset,
}