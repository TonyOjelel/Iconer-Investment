document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm");
    const taskForm2 = document.getElementById("taskForm2");
    const deathAdderImage = document.getElementById("deathAdderImage");
    const kairaImage = document.getElementById("kairaImage");
    const taskButton = document.getElementById("taskButton");
    const taskButton2 = document.getElementById("taskButton2");
    const alertMsg = document.getElementById("alertMsg");

    let wait = false;
    let joke = false;

    taskForm.addEventListener("submit", function(e) {
        e.preventDefault();
        if (!wait) {
            // Simulate a request
            setTimeout(function() {
                joke = true;
                alertMsg.textContent = "Task submitted successfully.";
                setTimeout(function() {
                    joke = false;
                }, 2000);
            }, 2000);
            wait = true;
            taskButton.disabled = true;
        }
    });

    taskForm2.addEventListener("submit", function(e) {
        e.preventDefault();
        if (!wait) {
            // Simulate a request
            setTimeout(function() {
                joke = true;
                alertMsg.textContent = "Task submitted successfully.";
                setTimeout(function() {
                    joke = false;
                }, 2000);
            }, 2000);
            wait = true;
            taskButton2.disabled = true;
        }
    });
});
