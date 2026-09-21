/* ========================================
   NEXTUP APP
======================================== */


/* ========================================
   STATE
======================================== */

const appState = {
    availableTime: 45,
    energy: "medium"
};


/* ========================================
   DATE
======================================== */

function updateCurrentDate() {

    const dateElement =
        document.getElementById("current-date");

    const today = new Date();

    const formattedDate =
        today.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric"
        });

    dateElement.textContent = formattedDate;
}


/* ========================================
   TIME SELECTOR
======================================== */

const timeButtons =
    document.querySelectorAll(".time-chip");

timeButtons.forEach(button => {

    button.addEventListener("click", () => {

        timeButtons.forEach(item => {
            item.classList.remove("selected");
        });

        button.classList.add("selected");

        appState.availableTime =
            Number(button.dataset.time);

        console.log(
            "Available time:",
            appState.availableTime
        );
    });

});


/* ========================================
   ENERGY SELECTOR
======================================== */

const energyButtons =
    document.querySelectorAll(".energy-button");

energyButtons.forEach(button => {

    button.addEventListener("click", () => {

        energyButtons.forEach(item => {
            item.classList.remove("selected");
        });

        button.classList.add("selected");

        appState.energy =
            button.dataset.energy;

        console.log(
            "Energy:",
            appState.energy
        );
    });

});


/* ========================================
   MARK DONE
======================================== */

const markDoneButton =
    document.getElementById("mark-done-button");

markDoneButton.addEventListener("click", () => {

    const taskTitle =
        document.getElementById("next-task-title");

    taskTitle.textContent =
        "Task completed ✓";

    taskTitle.style.textDecoration =
        "line-through";

    taskTitle.style.color =
        "#4CAF7A";

});


/* ========================================
   START FOCUS
======================================== */

const startFocusButton =
    document.getElementById("start-focus-button");

let timerInterval = null;

let remainingSeconds = 25 * 60;

startFocusButton.addEventListener("click", () => {

    if (timerInterval !== null) {
        return;
    }

    startFocusButton.textContent =
        "⏸ Focus running";

    timerInterval =
        setInterval(() => {

            if (remainingSeconds <= 0) {

                clearInterval(timerInterval);

                timerInterval = null;

                startFocusButton.textContent =
                    "✓ Focus complete";

                return;
            }

            remainingSeconds--;

            updateTimerDisplay();

        }, 1000);

});


/* ========================================
   TIMER DISPLAY
======================================== */

function updateTimerDisplay() {

    const timerElement =
        document.getElementById("timer-value");

    const minutes =
        Math.floor(remainingSeconds / 60);

    const seconds =
        remainingSeconds % 60;

    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


/* ========================================
   ADD TASK
======================================== */

const addTaskButton =
    document.getElementById("add-task-button");

addTaskButton.addEventListener("click", () => {

    alert(
        "Quick Add Modal sẽ được xây dựng ở Phase 3."
    );

});


/* ========================================
   NAVIGATION
======================================== */

const navigationItems =
    document.querySelectorAll(".nav-item");

navigationItems.forEach(item => {

    item.addEventListener("click", () => {

        navigationItems.forEach(nav => {
            nav.classList.remove("active");
        });

        item.classList.add("active");

        const page =
            item.dataset.page;

        console.log(
            "Current page:",
            page
        );

    });

});


/* ========================================
   INITIALIZE
======================================== */

updateCurrentDate();

updateTimerDisplay();