let questionContainers = document.querySelectorAll(".card__question-container");

for (let index = 0; index < questionContainers.length; index++) {
    questionContainers[index].addEventListener("click", function() {

        questionContainersModified = Array.from(questionContainers);
        questionContainersModified.splice(index, 1);
        
        questionContainersModified.forEach(questionContainer => {
            questionContainer.classList.remove("card__question-container--selected");
        });
        
        questionContainers[index].classList.toggle("card__question-container--selected");
    });
}