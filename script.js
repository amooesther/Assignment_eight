document.addEventListener("DOMContentLoaded", () => {
   
    const steps = [
        document.querySelector('.infoRight'),    
        document.querySelector('.plan'),  
        document.querySelector('.addOnWrapper'), 
        document.querySelector('.summaryWrapper'),
        document.querySelector('.thankYou') 
    ];

    const stepLinks = document.querySelectorAll(".steps a");
    const nextButtons = document.querySelectorAll(".buttons");
    const goBackButtons = document.querySelectorAll(".go-back");
    const confirmButton = document.querySelector(".bttn");

    let currentStepIndex = 0;

  
    function showStep(index) {
        console.log("Showing step:", index); 
        steps.forEach((step, i) => {
            if (i === index) {
                step.style.display = "block";
            } else {
                step.style.display = "none";
            }
        });
    }

   
    nextButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            if (currentStepIndex < steps.length - 1) {
                currentStepIndex++;
                showStep(currentStepIndex);
            }
        });
    });

  
    goBackButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            if (currentStepIndex > 0) {
                currentStepIndex--;
                showStep(currentStepIndex);
            }
        });
    });

    // Event listener for step navigation links
    stepLinks.forEach((link, index) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            currentStepIndex = index;
            showStep(currentStepIndex);
        });
    });
    confirmButton.addEventListener("click", (event) => {
        event.preventDefault();
        currentStepIndex = steps.length - 1; 
        showStep(currentStepIndex);
    });
   
    showStep(currentStepIndex);
});
