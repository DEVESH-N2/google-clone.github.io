const searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keydown",function(event){
    if(event.code==="Enter"){
        search();
    }
});

function search(){
    const input= searchInput.value;

    window.location.href= "https://www.google.com/search?q=" + input + "&rlz=1C1CHZN_enIN1027IN1027&oq=a&aqs=chrome.0.69i59l4j69i60j69i65j69i60l2.1886j0j7&sourceid=chrome&ie=UTF-8"
}