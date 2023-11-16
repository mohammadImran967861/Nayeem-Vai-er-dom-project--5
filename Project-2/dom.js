//step 1 = create onload handler
window.onload = function() {
    main()
}

function main() {
    const root = document.querySelector('#root');
    const btn = document.querySelector('#change-btn')
    const output = document.querySelector('#output')

    btn.addEventListener('click', function() {
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