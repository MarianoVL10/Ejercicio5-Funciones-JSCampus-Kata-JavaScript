let currentColor = 'green';
console.log(`Initial Color: ${currentColor}`)


function changeColors (){
    if (currentColor === 'green'){
        currentColor = 'yellow';
        console.log('YELLOW');
    }
    else if (currentColor === 'yellow'){
        currentColor = 'red';
        console.log('RED')
    }
    else if (currentColor === 'red'){
        currentColor = 'green';
        console.log('GREEN');
    }
}


//! Just uncomment this to get the program going :)
// setInterval(changeColors, 4000); 
