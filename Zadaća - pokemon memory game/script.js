const buttons1 = document.getElementsByClassName('buttons1');

function checkAnswer() {

const correctAnswerId = 'option2Card1';

const answerButtons = document.querySelectorAll('.buttons1');

answerButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.id === correctAnswerId) {
            button.style.backgroundColor = 'green';

            answerButtons.forEach(btn => {
                if (btn !== button) {
                    btn.disabled = true;
                }
            })
        } else {
            button.style.backgroundColor = 'red';  
            
            answerButtons.forEach(btn => {
                if (btn !== button) {
                    btn.disabled = true;
                }
            })
        }
    });
}); 
};

for (var i = 0; i <buttons1.length; i++) {
    buttons1[i].addEventListener('click', checkAnswer);
}

const buttons2 = document.getElementsByClassName('buttons2');

function checkAnswer2() {

    const correctAnswerId = 'option3Card2';
    
    const answerButtons = document.querySelectorAll('.buttons2');
    
    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.id === correctAnswerId) {
                button.style.backgroundColor = 'green';
    
                answerButtons.forEach(btn => {
                    if (btn !== button) {
                        btn.disabled = true;
                    }
                })
            } else {
                button.style.backgroundColor = 'red';  
                
                answerButtons.forEach(btn => {
                    if (btn !== button) {
                        btn.disabled = true;
                    }
                })
            }
        });
    }); 
};

for (var i = 0; i <buttons2.length; i++) {
    buttons2[i].addEventListener('click', checkAnswer2);
}


const buttons3 = document.getElementsByClassName('buttons3');

function checkAnswer3() {

    const correctAnswerId = 'option1Card3';
        
    const answerButtons = document.querySelectorAll('.buttons3');
        
    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.id === correctAnswerId) {
                    button.style.backgroundColor = 'green';
        
                answerButtons.forEach(btn => {
                    if (btn !== button) {
                        btn.disabled = true;
                        }
                    })
                }   else {
                    button.style.backgroundColor = 'red';  
                    
                answerButtons.forEach(btn => {
                    if (btn !== button) {
                        btn.disabled = true;
                    }
                })
            }
        });
    }); 
};

for (var i = 0; i <buttons3.length; i++) {
    buttons3[i].addEventListener('click', checkAnswer3);
}

    