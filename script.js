alert("ОЛЕГ ПИДР =))");
var 
    game     =     document.getElementsByClassName('game'),
    list     =     [],
    x_or_0   =     0,

    matrX    =     [[0,0,0],
                    [0,0,0],
                    [0,0,0]],

    matr0    =     [[0,0,0],
                    [0,0,0],
                    [0,0,0]],

    counter  =       0,
    isPlay   =       1,
    imgRestart = document.getElementById("restartImg");
imgRestart.addEventListener("click", pressButton);

for (var i = 0; i < 9;i++) {
    list[i] = document.getElementById(i + 1);
    list[i].addEventListener('click', pressButton);
}
function initData() {
    x_or_0      =       0,
    sumX        =       0,
    sum0        =       0,
    counter     =       0,
    isPlay      =       1,

    matrX    =     [[0,0,0],
                    [0,0,0],
                    [0,0,0]],

    matr0    =     [[0,0,0],
                    [0,0,0],
                    [0,0,0]];
}
function pressButton() {
    if (isPlay == 0 ) {
        initData();
        imgRestart.style.opacity = "0";
        document.getElementById("game").style.transform = "translate(0,0)";
        imgRestart.style.marginTop = "100px";
        imgRestart.classList.remove("imgAdd");
        var coll = document.getElementsByClassName("winMessageShow");
        for (let i = 0; i < coll.length;i++) {
            coll[i].className = "winMessage";
        }
        for (let i = 0; i < 9;i++) {
            console.log(list[i]);
            list[i].classList.remove("cross");
            list[i].classList.remove("zero");
        }
        for(let i = 0;i < list.length;i++) {
            list[i].style.opacity = "1";
        }
    } 
    else if(x_or_0  == 0) {
        addCross(this);
    }
    else if(x_or_0 == 1) {
        addZero(this);
    }
}

function addCross(elem) {
    if (mark(elem.id, matrX)) {
        elem.className += " cross";
        x_or_0 = 1;
        if(counter >= 5)win(true);
    }

}

function addZero(elem) {
    if(mark(elem.id, matr0)) {
        elem.className += " zero";
        x_or_0 = 0;
        mark(elem.id, matr0);
        if(counter >= 5)win(false);
    }

}
function mark(id, matr) {
    let x = 0, y = 0;
    x = id < 4 ? 0 : id < 7 ? 1 : 2;
    y = !x ? id - 1 : x == 1 ? id - 4 : id - 7;
    if(matr0[x][y] || matrX[x][y]) return false;
    matr[x][y] = 1;
    counter++;
    return true;
}
function win(who) {
    if(check(who ? matrX : matr0 )) {
        var elem = document.getElementById(who ? "xwin" : "zerowin");
        elem.className = "winMessageShow";
        elem.style.width = document.documentElement.clientWidth + "px";
        move();
        isPlay = 0;
    }
    if(counter >= 9 && !elem) {
        showImgRestart();
        document.getElementById("restart").className = "winMessageShow";
        document.getElementById("restart").style.width = document.documentElement.clientWidth + "px";
        move();
        isPlay = 0;
    }


}
function move() {
    imgRestart.style.display = "block";
        imgRestart.style.opacity = "1";
        document.getElementById("b")
        document.getElementById("game").style.transform = "translate(0,-140px)";
        imgRestart.style.marginTop = "0";
        imgRestart.classList.add("imgAdd");
        for(let i = 0;i < list.length;i++) {
            list[i].style.opacity = "0.1";
        }
}
function check (matr) {
    if( !!matr[0][0] && !!matr[0][1] && !!matr[0][2] ||
        !!matr[1][0] && !!matr[1][1] && !!matr[1][2] ||
        !!matr[2][0] && !!matr[2][1] && !!matr[2][2] ||
        !!matr[0][0] && !!matr[1][0] && !!matr[2][0] ||
        !!matr[0][1] && !!matr[1][1] && !!matr[2][1] ||
        !!matr[0][2] && !!matr[1][2] && !!matr[2][2] ||
        !!matr[0][0] && !!matr[1][1] && !!matr[2][2] ||
        !!matr[0][2] && !!matr[1][1] && !!matr[2][0] ) {
            return true;
    }
}

function showImgRestart() {
    imgRestart.style.display = "block";
}