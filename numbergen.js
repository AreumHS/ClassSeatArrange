var flag = [];
var seat = [];
var count = 0;

for(var i=1; i<=26; i++){ flag[i] = false; seat[i] = false; }
flag[0] = true;

window.onkeydown = (e) => {if(e.keyCode == 32) generateNumber()};

function getNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function generateNumber(){
    var displaytag = document.getElementById('display');
    if(displaytag.innerHTML != 'X'){
        alert("번호가 이미 뽑혀 있습니다.");
        return;
    }
    if(count == 26){
        alert("모든 번호가 뽑혔습니다.");
        return;
    }

    var rannum = getNum(1,26);
    while(flag[rannum] == true) rannum = getNum(1,26);

    flag[rannum] = true;
    count++;
    displaytag.innerHTML = rannum;
}

function clickseat(nowseat){
    if(seat[nowseat] == true){
        alert("이미 배치된 좌석입니다.");
        return;
    }else{
        var nownum = document.getElementById('display');
        if(nownum.innerHTML == 'X'){
            alert("번호를 먼저 뽑아주세요.");
            return;
        }else{
            seat[nowseat] = true;
            var strtmp = 's'+nowseat.toString();
            var seattag = document.getElementById(strtmp);
            seattag.classList.replace('lib-bg2', 'lib-bg-rev');
            seattag.innerHTML = nownum.innerHTML +"번";
            nownum.innerHTML = 'X';
        }
    }

}