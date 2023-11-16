/*
* project requirments:
* Change the background color by Generating random hex color by clicking a button
* - Alse display the hex code to a disabled input field
* - Add a button to copy the color code
* - Add a toast message when copied
*/
// Global variable
let div = null;
let allColors = []
let nextArr = [];

const root = document.querySelector('#root');

//step 1 = create onload handler

window.onload = function() {
    main()
}

function main() {
    const output = document.querySelector('#output');
    const changeBtn = document.querySelector('#change-btn');
    const copyBtn = document.querySelector('#copy-btn');

// copy color code
    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(`#${output.value}`)
        if(div !== null) {
            div.remove();
            div = null;
        }

        if(isHexvalid(output.value)) {
            genericToastMsg(`#${output.value} Copied`)
        } else if(output.value === '') {
            alert('Please write Hex color format')
        } else if(!isHexvalid(output.value)) {
            alert('This is not Hex color code format')
        }
    })

    output.addEventListener('keyup', function(e) {
        const color = e.target.value;
        if(color) {
            e.target.value = color.toUpperCase();

            if(isHexvalid(color)) {
                root.style.backgroundColor = `#${color}`;
            }
        }
    })

    changeBtn.addEventListener('click', function(e) {
        const bgColor = randomHexColor();
        allColors.push(bgColor)
        currentIndex = allColors.length - 1;
        output.value = bgColor;
        root.style.backgroundColor = `#${bgColor}`;

        if(div !== null) {
            div.remove();
            div = null;
        }
    })
}

const backBtn = document.querySelector('#back-btn');

backBtn.addEventListener('click', function() {
    if(currentIndex === 0) {
        alert('Color start from this color')
    }else if(currentIndex > 0) {
        currentIndex--
        const bgColor = allColors[currentIndex];
        console.log(currentIndex)
        output.value = bgColor;
        root.style.backgroundColor = `#${bgColor}`;
    } 
});

const nextBtn = document.querySelector('#next-btn')

nextBtn.addEventListener('click', function() {
    
    if(allColors.length - 1 > currentIndex) {   
        currentIndex++;
        const bgColor = allColors[currentIndex];
        console.log(allColors);
        output.value = bgColor;
        root.style.backgroundColor = `#${bgColor}`;
    } else {
        alert('next color is over')
    }
});


//step 2 = random color generator funtion

function randomHexColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let randdomHaxGenarator = `${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
    return randdomHaxGenarator.toUpperCase();
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