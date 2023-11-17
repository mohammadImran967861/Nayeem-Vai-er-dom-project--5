/*
* project requirments:
* Change the background color by Generating random hex color by clicking a button
* - Alse display the hex code to a disabled input field
* - Add a button to copy the color code
* - Add a toast message when copied
*/
// Global variable
let div = null;
console.log(div);
let allColors = []
let nextArr = [];
let currentIndex = 0;



const output = document.querySelector('#output');
const root = document.querySelector('#root');
const backBtn = document.querySelector('#back-btn');
const nextBtn = document.querySelector('#next-btn');

//step 1 = create onload handler

window.onload = function() {
    main()
}

function main() {
    const output2 = document.querySelector('#output2');
    const output = document.querySelector('#output');
    const changeBtn = document.querySelector('#change-btn');
    const copyBtn = document.querySelector('#copy-btn');
    const copyBtn2 = document.querySelector('#copy-btn2');

    copyBtn2.addEventListener('click', function() {
        navigator.clipboard.writeText(output2.value)

        if(div !== null) {
            div.remove();
            div = null;
        }
        genericToastMsg(output2.value)
    })

// copy color code
    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(`#${output.value}`);
        if(div !== null) {
            div.remove();
            div = null;
        }
        if(isHexvalid(output.value)) {
            genericToastMsg(`#${output.value} Copied`);
        } else if(output.value === '') {
            alert('Please write Hex color format')
        } else if(!isHexvalid(output.value)) {
            alert('This is not Hex color code format')
        }
    })

    output.addEventListener('keyup', function(e) {
        const color = e.target.value;
        if(color) {
            e.target.value = color;

            if(isHexvalid(color)) {
                root.style.backgroundColor = `#${color}`;
            }
        }
    })

    changeBtn.addEventListener('click', function(e) {

        const color = generateColorDecimal()
            
        const hex = generateHexColor(color);
        const rgb = generateRgbColor(color);
        allColors.push(hex);
        currentIndex = allColors.length - 1;
        
        output.value = hex;
        output2.value = rgb;
        root.style.backgroundColor = `#${hex}`;

        if(div !== null) {
            div.remove();
            div = null;
        }
    })
}

backBtn.addEventListener('click', function () {
    if (currentIndex === 0) {
        alert('Color starts from this color');
    } else if (currentIndex > 0 && allColors.length > 0) { // Check if allColors is not empty
        currentIndex--;
        const bgColor = allColors[currentIndex];
        console.log(currentIndex);
        output.value = bgColor;
        root.style.backgroundColor = `#${bgColor}`;
    }
});



nextBtn.addEventListener('click', function () {
    if (allColors.length > 0 && currentIndex < allColors.length - 1) { // Check if allColors is not empty and currentIndex is within bounds
        currentIndex++;
        const bgColor = allColors[currentIndex];
        console.log(allColors);
        output.value = bgColor;
        root.style.backgroundColor = `#${bgColor}`;
    } else {
        alert('Next color is over or there are no colors yet');
    }
});


//step 2 = random color generator funtion

// function 1 - generate theree random decimal number for red, green and blue
// return as an object

function generateColorDecimal() {
    let red = Math.floor(Math.random() * 254) + 1;
    let green = Math.floor(Math.random() * 254) + 1;
    let blue = Math.floor(Math.random() * 254) + 1;

    return {
        red,
        green,
        blue
    }
}


//generate Hex color

function generateHexColor({red, green, blue}) {
    function getTwoCode(value) {
        const hex = value.toString(16);
        if (value) {
            return hex.length === 1 ? `0${hex}` : hex;
        }
    }
    return `${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`.toUpperCase();
}

//generate RGB color

function generateRgbColor({red, green, blue}) {
    return `rgb(${red}, ${green}, ${blue})`
}

function genericToastMsg(msg) {
    div = document.createElement('div')
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';
    root.appendChild(div);

    div.addEventListener('click', function() {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        div.addEventListener('animationend', function() {
            div.remove();
            div = null;
        })
    });
}

/**
 *
 * @param {string} color 
 */

function isHexvalid(color) {
    if(color.length !== 6) return false;

    return /[0-9A-Fa-f]{6}$/i.test(color);
}

// step 3 - collect all necessary references

// step 4 - handle the change button click event

// step 5 - handle the copy button click event

// step 6 - activate toast message

// step 7 - create a dynamic toast message

// step 8 - clear toast message

//step 9 - create isHexvalid function

// step 10 - implement change handler on iput field

// step 11 - prevent copying hex code if it is not valid

// step 12 - refactor the color generator function

// step 13 - update color code to display rgb colors