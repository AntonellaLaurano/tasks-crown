var profession = document.getElementById("PROFESSION");
var tasks = document.getElementById("TASKS");

profession.addEventListener("click", fprofession);
tasks.addEventListener("click", ftasks);

function fprofession() {
    document.location.href = "ProfessionalP.html" + "#profession-content";
}

function ftasks() {
    document.location.href = "TasksWP.html" + "#trabajo-content";
}