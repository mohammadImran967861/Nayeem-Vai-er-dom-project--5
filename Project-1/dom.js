//step 1 = create onload handler
window.onload = function() {
    main()
}

function main() {
    const btn = document.querySelector('#change-btn');
    const root = document.querySelector('#root')
    
    btn.addEventListener('click', function() {
        let bgColor = changeColorFunc()
        root.style.backgroundColor = bgColor;
    });
}

//step 2 = random color generator funtion

function changeColorFunc() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    return `rgb(${red}, ${green}, ${blue})`
}