
const questions = [
    ["새로운 경험에 열려 있는 편이다.", ["그렇지 않다", "약간 그렇다", "보통이다", "매우 그렇다"]],
    ["상상력보다 사실을 중시하는 편이다.", ["매우 그렇다", "그렇지 않다", "약간 그렇다", "보통이다"]],
    ["감정보다는 논리에 따라 행동한다.", ["보통이다", "매우 그렇다", "그렇지 않다", "약간 그렇다"]],
    ["계획보다는 즉흥적으로 행동하는 편이다.", ["약간 그렇다", "보통이다", "매우 그렇다", "그렇지 않다"]],
    ["사람들과 함께 활동하는 것을 즐긴다.", ["그렇지 않다", "약간 그렇다", "보통이다", "매우 그렇다"]],
    ["혼자서 조용히 생각하는 시간이 필요하다.", ["매우 그렇다", "그렇지 않다", "보통이다", "약간 그렇다"]],
    ["목표를 정하고 체계적으로 움직인다.", ["보통이다", "매우 그렇다", "그렇지 않다", "약간 그렇다"]],
    ["새로운 아이디어를 내는 것을 좋아한다.", ["약간 그렇다", "보통이다", "매우 그렇다", "그렇지 않다"]],
    ["토론이나 발표에 참여하는 것을 좋아한다.", ["그렇지 않다", "보통이다", "약간 그렇다", "매우 그렇다"]],
    ["세부적인 것보다 전체 흐름을 중시한다.", ["매우 그렇다", "약간 그렇다", "보통이다", "그렇지 않다"]],
    ["체험을 통해 배우는 것이 좋다.", ["보통이다", "매우 그렇다", "약간 그렇다", "그렇지 않다"]],
    ["사람들의 감정을 잘 이해하는 편이다.", ["약간 그렇다", "보통이다", "그렇지 않다", "매우 그렇다"]],
    ["규칙과 절차를 따르는 것을 선호한다.", ["그렇지 않다", "보통이다", "매우 그렇다", "약간 그렇다"]],
    ["상대방의 말을 잘 경청하는 편이다.", ["매우 그렇다", "약간 그렇다", "보통이다", "그렇지 않다"]],
    ["스스로 계획을 세우고 실천하는 편이다.", ["보통이다", "매우 그렇다", "약간 그렇다", "그렇지 않다"]],
    ["새로운 도전에 흥미를 느낀다.", ["약간 그렇다", "보통이다", "그렇지 않다", "매우 그렇다"]]
];
const types = ["미미", "루루", "포포", "쿵쿵"];
let current = 0, scores = [0,0,0,0];

function showQuestion() {
    const container = document.getElementById("question-container");
    if (current >= questions.length) return showResult();
    const [text, options] = questions[current];
    container.innerHTML = `<h2>${current+1}. ${text}</h2>`;
    options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = opt;
        btn.onclick = () => {
            scores[i]++;
            current++;
            showQuestion();
        };
        container.appendChild(btn);
    });
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    const max = Math.max(...scores);
    const idx = scores.indexOf(max);
    const container = document.getElementById("result-container");
    container.style.display = "block";
    container.innerHTML = `
        <h2>당신의 유형은 ${types[idx]}!</h2>
        <img src="assets/${types[idx]}.png" width="200" />
        <p>${types[idx]} 유형은 당신의 학습 방식에 잘 어울려요!</p>
    `;
}

document.getElementById("next-btn").onclick = showQuestion;
showQuestion();
