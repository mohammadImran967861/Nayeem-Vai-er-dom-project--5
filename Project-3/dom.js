/*
* project requirments:
* Change the background color by Generating random hex color by clicking a button
* - Alse display the hex code to a disabled input field
* - Add a button to copy the color code
* - Add a toast message when copied
*/


//step 1 = create onload handler

window.onload = function() {
    main()
}

function main() {
    const root = document.querySelector('#root');
    const output = document.querySelector('#output');
    const changeBtn = document.querySelector('#change-btn');
    const copyBtn = document.querySelector('#copy-btn');
    
// copy color code
    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(output.value)
    })

    changeBtn.addEventListener('click', function() {
        const bgColor = randomHexColor();
        output.value = bgColor;
        root.style.backgroundColor = bgColor;
    
    })
}   

//step 2 = random color generator funtion

function randomHexColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}