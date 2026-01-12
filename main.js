let button = document.getElementById("themeBtn");

button.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        button.innerText = "Light Mode";
    } else {
        button.innerText = "Dark Mode";
    }
});
