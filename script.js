let submit = document.querySelector(".submit");

let newState = () => { //on submit - hides visible elements in the box, shows rate summary and "thank you" message

    let yourRate = document.getElementsByClassName("rated"); //creates an array of elements with class "rated", the number of elements is equal to user's rate
    document.getElementById("rate_number").innerHTML = yourRate.length; //inserts number to a message on submit "you selected <yourRate.length> out of 5"

    let st_1_elements = document.getElementsByClassName("state1").length; //gets number of elements with class "state1" - visible
    let st_0_elements = document.getElementsByClassName("state0").length; //gets number of elements with class "state0" - hidden

    for (i = st_1_elements-1; i >= 0; i--) {

        document.getElementsByClassName("state1")[i].classList.remove("state1"); //removes "state1" class from all elements which have it on their class lists - hides them
        
    }

    for (i = st_0_elements-1; i >= 0; i--) { // adds "state1" class to all elements with class "state0" - unhides them

        document.getElementsByClassName("state0")[i].className = "state1";
    }

    let container = document.querySelector(".container");
    container.classList.add("container_after");
    console.log(container);



}        
    
    function rate() {

        let elements = document.getElementsByClassName("number");
        let numbers = document.querySelector(".numbers");

        numbers.addEventListener("mouseout", function() {

            for (let i = 0; i < 5; i++) { //moving cursor out of a number removes class "hovered" and returns class "notHovered" from all numbers

                elements[i].classList.remove("hovered");
                elements[i].classList.add("notHovered"); 

            }

        })

            for (let i = 0; i <= 4; i++) {

                let element = elements[i];

                element.addEventListener("mouseover", function() { //number's background changes to light grey when hovered

                    for (let j = 0; j < 5; j++) { //moving cursor to another number removes class "hovered" and returns class "notHovered" from all numbers

                        elements[j].classList.add("notHovered"); 
                        elements[j].classList.remove("hovered");

                    }
                    for (let k = i; k >= 0; k--) {  //changes class for all numbers equal or smaller than the hovered one to "hovered" - background turns light grey
                        elements[k].classList.remove("notHovered");
                        elements[k].classList.add("hovered");
                    }

                    });


            element.addEventListener("click", function() { 


                for (let j = 0; j < 5; j++) { //clicking another number remove class "rated" from all numbers

                    elements[j].classList.remove("rated"); 

                }
                for (let k = i; k >= 0; k--) {  //clicking on any number changes class for all numbers equal or smaller than the clicked one to "rated" - background turns orange
                    
                    elements[k].classList.add("rated");
                }

                });

        }

    }

    submit.addEventListener("click", newState);
    rate();


    
