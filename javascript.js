const elsTitles = document.querySelectorAll("#gameoptions input");
const chooseGame = () => {
   const rand = Math.floor(Math.random() * elsTitles.length);
   const randomTitle = elsTitles[rand].value; 
   document.querySelector("#answer").textContent = randomTitle;
}; 

document.querySelector("#answerbutton").addEventListener("click", chooseGame);