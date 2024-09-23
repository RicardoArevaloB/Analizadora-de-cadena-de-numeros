document.addEventListener('DOMContentLoaded', () => {
    const printButton = document.getElementById('Buttonprint');
    
    printButton.addEventListener('click', () => {
        const numbers = document.getElementById('numbers').value;
        const filter = document.getElementById('filter').value.toLowerCase();
        const toggleFilter = document.getElementById('toggleFilter').checked;
        let outputDiv = document.getElementById('output');
        
    
        outputDiv.innerHTML = '';

        let baseSize = 20; 
        let sizeEven = baseSize * 2; 
        let increment = 5; 

 
        [...numbers].forEach((num) => {
            let currentNum = parseInt(num);


            let span = document.createElement('span');
            span.textContent = currentNum;


            if (toggleFilter) {
                let isEven = currentNum % 2 === 0;
                let conditionMet = (filter === 'par' && isEven) || (filter === 'impar' && !isEven);


                span.style.fontSize = conditionMet ? sizeEven + 'px' : baseSize + 'px';
                

                if (isEven) sizeEven += increment;
            } else {
                
                span.style.fontSize = baseSize + 'px';
            }

            outputDiv.appendChild(span);
        });
    });
});