function mostrar (num) {
    if(num.value == 1) {
        document.getElementById("contenido-persona").style.display = "block";
        document.getElementById("contenido-empresa").style.display = "none";
    } else {
        if(num.value == 2) {
            document.getElementById("contenido-persona").style.display = "none";
            document.getElementById("contenido-empresa").style.display = "block";
        }
    }
    
}