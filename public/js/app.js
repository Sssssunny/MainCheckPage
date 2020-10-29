var out = 0, notout = 0, order = 0, cancel = 0, banpum = 0;

$(document).ready(function () {
    $(".btn").click(function () { // 버튼 클릭시
        if (out == 0 || notout == 0 || order == 0 || cancel == 0 || banpum == 0) {
            alert("확인해주세요");
        }
        else if (out == 1 && notout == 1 && order == 1 && cancel == 1 && banpum == 1) {
            if (confirm("정말 확인하셨습니까?")) { // 확인창이 뜨고 확인을 누르면
                alert("메인페이지로 이동합니다"); // "메인페이지로 이동합니다" 문구가 뜨면서
                $(".popup").hide(); // 팝업창이 꺼진다(숨김)
            }
            else {
                alert("다시 내용을 확인해주세요"); // "다시 내용을 확인해주세요" 문구가 뜨고 팝업창이 그대로 유지된다
            }
        }
    });

    var click = 0, click2 = 0, click3 = 0, click4 = 0, click5 = 0; // 모든 요소의 클릭 횟수를 0으로 선언한다(초기화)

    $(".i1").click(function () { // 클릭 시
        click++; // 클릭 횟수 증가
        out = 1;
        switch (click) {
            case 1: // 클릭 횟수가 1일 때
                $(".tbl").hide(); // 모든 테이블 숨기고
                click2 = 0, click3 = 0, click4 = 0, click5 = 0; // 다른 요소의 클릭 횟수를 0으로 초기화 한 뒤
                $(".t1").show(); // 클릭한 요소의 테이블을 보여준다
                break; // switch문 빠져나오기
            case 2: // 클릭 횟수가 2일 때
                $(".t1").hide(); // 클릭한 요소의 테이블을 숨긴 후
                click = 0; // 클릭한 요소의 클릭 횟수를 0으로 초기화한다
                break; // switch문 빠져나오기
        }
    });

    $(".i2").click(function () {
        click2++;
        notout = 1;
        switch (click2) {
            case 1:
                $(".tbl").hide();
                click = 0, click3 = 0, click4 = 0, click5 = 0;
                $(".t2").show();
                break;
            case 2:
                $(".t2").hide();
                click2 = 0;
                break;
        }
    });

    $(".i3").click(function () {
        click3++;
        order = 1;
        switch (click3) {
            case 1:
                $(".tbl").hide();
                click = 0, click2 = 0, click4 = 0, click5 = 0;
                $(".t3").show();
                break;
            case 2:
                $(".t3").hide();
                click3 = 0;
                break;
        }
    });

    $(".i4").click(function () {
        click4++;
        cancel = 1;
        switch (click4) {
            case 1:
                $(".tbl").hide();
                click = 0, click2 = 0, click3 = 0, click5 = 0;
                $(".t4").show();
                break;
            case 2:
                $(".tbl").hide();
                click4 = 0;
                break;
        }
    });

    $(".i5").click(function () {
        click5++;
        banpum = 1;
        switch (click5) {
            case 1:
                $(".tbl").hide();
                click = 0, click2 = 0, click3 = 0, click4 = 0;
                $(".t5").show();
                break;
            case 2:
                $(".t5").hide();
                click5 = 0;
                break;
        }
    });

    // 마우스 올려놓으면 테이블 보이기
    // $(".item").mouseover(function(){ // 올려놓았을 때
    //     $(".tbl").stop().fadeIn(200); //뾰로롱 나타나기
    // });
    // $(".item").mouseout(function(){ // 안올려놓았을 때
    //     $(".tbl").stop().hide(); // 사라짐
    // });
});