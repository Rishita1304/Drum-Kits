const kits = ['snare','kick','crash','tom'];
const containerE1 = document.querySelector(".container");
kits.forEach(kit=>{
    const btnE1 = document.createElement("button");
    containerE1.appendChild(btnE1);
    btnE1.classList.add("btn");
    btnE1.innerText = kit;
    btnE1.style.backgroundImage = "url(Images/" + kit + ".jpg)";
    const audioE1 = document.createElement("audio");
    audioE1.src = "music/"+ kit + ".mp3";
    containerE1.appendChild(audioE1);
    btnE1.addEventListener("click", ()=>{
        audioE1.play();
    })
})