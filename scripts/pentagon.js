function calculatePentagonArea() {
    const base = getInputValueById('pentagon-base')
    const height = getInputValueById('pentagon-height')
    const area = .5 * base * height;
    console.log('area:', area)
    displayArea('pentagon-area', area)
}



// work with a reusable function--

// convert input text to float-
function getInputValueById(inputValue) {
    const inputText = document.getElementById(inputValue)
    const inputFloat = parseFloat(inputText.value)
    return inputFloat
}

// display area result-
function displayArea(elementId, area) {
    document.getElementById(elementId).innerText = area;
}