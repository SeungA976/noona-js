//랜덤번호 지정
//유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.!
//랜덤번호가 <유저번호 Down!!
//랜덤번호가 >유저번호 Up!!
//Rest버튼을 누르면 게임이 리셋된다
//5번의 기회를 다 쓰면 게임이 끝난다.(더이상 추측불가, 버튼이 disable)
//유저가 1과 100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면 또 알려준다. 기회를 깍지 않는다.

let computerNum =0;
//""안에는 html id 값 그대로 쓰기
let playButton = document.getElementById("playbutton");
let userinput = document.getElementById("userinput");
let resultArea = document.getElementById("result-area");
let resetBotton = document.getElementById("reset-button");
//기회 5번
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area");
let history=[];

playButton.addEventListener("click",play);
resetBotton.addEventListener("click",reset);
userinput.addEventListener("focus",function(){userinput.value="play"})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum);
}

function play(){
    let userValue = userinput.value;

    //유효성 검사
    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해주세요"
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요. "
        return;
    }
    chances -- ;
    //정적과 동적 변수를 같이 쓸때!!
    chanceArea.textContent = `남은기회:${chances}번`;
    console.log("chance",chances);
    if(userValue < computerNum){
        resultArea.textContent = "Up!!"
    }else if(userValue>computerNum){
        resultArea.textContent = "Down!!"
    }else {
        resultArea.textContent = "정답입니다!"
        gameOver=true
    }
    history.push(userValue);
    console.log(history)
    if(chances<1){
        gameOver=true;
    }
    if (gameOver==true){
        playButton.disabled = true;
    }
    }


function reset(){
    //user input 창이 깨끗하게 정리되고
    userinput.value = ""
    //새로운 번호가 생성되고
    pickRandomNum();
    resultArea.textContent="결과값이 여기 나옵니다."
}

pickRandomNum();

