const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input")

const keyCheck = document.querySelector(".key-check input");

let mapedKeys = [];

let audio = new Audio("src/tunes/a.wav")

const playtune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};                                                                                                  

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => 
    playtune(key.dataset.key));
    mapedKeys.push(key.dataset.key);

});

//Capturando a tecla que o usuario ta clicando
document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)){
        playtune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

//Função que pega a ação de alterar volume
volumeSlider.addEventListener("input", handleVolume);
keyCheck.addEventListener("click", showHideKeys);