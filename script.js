let globalConfig = function(){
    this.submit = document.querySelector(".submit");                   
    this.ratesContainer = document.querySelector(".numbers");                                           
    this.ratesList = document.querySelectorAll('.numbers .circle');    

    return this;
}();


function onSubmit(){                                                         
    let yourRate = document.getElementsByClassName("rated");                  
    document.getElementById("rate-number").innerHTML = yourRate.length;        

    var summaryContainer = document.querySelector(".container.hide-content");  
    var raitingContainer = document.querySelector(".container:not(.hide-content)"); 
    raitingContainer.classList.add("hide-content");                            
    summaryContainer.classList.remove("hide-content");                        
    summaryContainer.classList.add("container-after");                        

};    

function onMouseOver(event){                                                    
    globalConfig.ratesList.forEach(                                               
        function(currentValue) {                                  
            if(currentValue.customValue <= event.currentTarget.customValue){        
                currentValue.classList.add("hovered");                            
            }
            else{
                currentValue.classList.remove("hovered");                        
            }
          });
};

function onMouseClick(event){                                               
    globalConfig.ratesList.forEach(
        function(currentValue) {
            if(currentValue.customValue <= event.currentTarget.customValue){ 
                currentValue.classList.add("rated");                       
            }
            else{
                currentValue.classList.remove("rated");                   
            }
          });
};

function clearRateElementsState() {
    let hoveredElements = document.querySelectorAll('.numbers .circle.hovered');
    hoveredElements.forEach(
        function(currentValue) {
            currentValue.classList.remove("hovered");
      })
};

function setupEvents() {                                                               
    globalConfig.ratesContainer.addEventListener("mouseout", function(event) {          
        if (ratesContainer === event.target) {
            clearRateElementsState();
            }
        else {
                return
            }

            document.addEventListener("mouseover", function(event) {                     
                if (event.target !== ratesContainer) {
                    clearRateElementsState();
                }
            }, true);
        
        },
    false);

    
    globalConfig.ratesList.forEach(                                          
        function(currentValue, currentIndex) {  
            currentValue.customValue = currentIndex;                        
            currentValue.addEventListener("mouseover", onMouseOver, true);   
            currentValue.addEventListener("click", onMouseClick, true);     
          }
    );
        


    globalConfig.submit.addEventListener("click", onSubmit);
};

setupEvents();


    
