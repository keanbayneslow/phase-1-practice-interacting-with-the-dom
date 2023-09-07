document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    let count = 0;
    let isPaused = false;


    function updateCounter() {
        if (!isPaused) {
            count++;
            counter.innerText = count;
        }
    }


    const interval = setInterval(updateCounter, 1000);

    const pauseButton = document.getElementById("pause");

    pauseButton.addEventListener("click", () => {
        isPaused = !isPaused;
        pauseButton.innerText = isPaused ? "resume" : "pause";


        const buttonsToDisable = document.querySelectorAll("button:not(#pause)");
        buttonsToDisable.forEach((button) => {
            button.disabled = isPaused;
        });
    });


    const restartButton = document.getElementById("restart");

    restartButton.addEventListener("click", () => {
        count = 0;
        counter.innerText = count;
        isPaused = false;


        const buttonsToEnable = document.querySelectorAll("button");
        buttonsToEnable.forEach((button) => {
            button.disabled = false;
        });


        pauseButton.innerText = "pause";
    });


    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("list");

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const commentInput = document.getElementById("comment-input");
        const commentText = commentInput.value.trim();

        if (commentText !== "") {
            const commentItem = document.createElement("li");
            commentItem.innerText = commentText;
            commentList.appendChild(commentItem);


            commentInput.value = "";
        }
    });
});