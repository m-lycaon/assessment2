//診断結果

const results = {

    A: {
        title: "あなたは「直感行動タイプ」！",

        description:
            "自分の感覚やひらめきを大切にして、素早く行動できるタイプです。チャンスを逃さず、迷いすぎないことがあなたの強みです。",

        strength:
            "決断が早く、新しいことにも積極的に挑戦できます。",

        weakness:
            "勢いで決めてしまい、後から「もっと考えればよかった」と感じることがあります。",

        advice:
            "重要な決断をするときだけは、「他にどんな選択肢があるか」を3つ考えてから決める習慣をつけてみましょう。"
    },


    B: {
        title: "あなたは「分析・合理タイプ」！",

        description:
            "情報を集めて、それぞれの選択肢を比較しながら決めるタイプです。物事を論理的に考えることが得意です。",

        strength:
            "メリット・デメリットを整理して、納得できる判断ができます。",

        weakness:
            "選択肢を比較しすぎて、決断に時間がかかることがあります。",

        advice:
            "「5分で決める」など時間制限を設定し、最後は自分にとって一番重要な基準で決めてみましょう。"
    },


    C: {
        title: "あなたは「協調タイプ」！",

        description:
            "周囲の人の意見や気持ちを大切にしながら決断するタイプです。人と協力して物事を進めることが得意です。",

        strength:
            "周囲の意見を取り入れ、みんなが納得しやすい選択をできます。",

        weakness:
            "人の意見を気にしすぎて、自分の本当の希望を後回しにすることがあります。",

        advice:
            "他の人に相談する前に、「自分ならどうしたいか」を一度考えてから意見を聞くようにしてみましょう。"
    },


    D: {
        title: "あなたは「慎重・計画タイプ」！",

        description:
            "起こりうる問題やリスクを考えてから行動するタイプです。先のことまで考えて準備できることが特徴です。",

        strength:
            "リスクを予測し、失敗を減らすための準備ができます。",

        weakness:
            "「もし失敗したら」と考えすぎて、なかなか決断できないことがあります。",

        advice:
            "「選んだ場合にどうなるか」を短期・長期に分けて考え、最後に「最悪の場合でも対応できるか」を確認して決断しましょう。"
    }

};


//診断の処理

function diagnose() {

    const questions = [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5"
    ];


    /* 各タイプの得点 */

    const scores = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };


    /* 回答を確認 */

    for (const question of questions) {

        const answer = document.querySelector(
            `input[name="${question}"]:checked`
        );


        if (!answer) {

            alert("すべての質問に答えてください。");

            return;
        }


        scores[answer.value]++;
    }


    /* 最も得点が高いタイプを探す */

    let type = "A";

    for (const key in scores) {

        if (scores[key] > scores[type]) {

            type = key;
        }
    }


    /* 結果を表示 */

    const result = results[type];


    document.getElementById("resultTitle").textContent =
        result.title;

    document.getElementById("resultDescription").textContent =
        result.description;

    document.getElementById("resultStrength").textContent =
        result.strength;

    document.getElementById("resultWeakness").textContent =
        result.weakness;

    document.getElementById("resultAdvice").textContent =
        result.advice;


    document.getElementById("result").style.display =
        "block";


    /* 結果まで自動スクロール */

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });

}


//フォームの送信

document.getElementById("quizForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        diagnose();

    }
);


//もう一度診断する

document.getElementById("restartButton").addEventListener(
    "click",
    function() {

        /* 回答をリセット */

        document.getElementById("quizForm").reset();


        /* 結果を非表示 */

        document.getElementById("result").style.display =
            "none";


        /* ページ上部へ */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);
