function calculateRectangleArea() {
    // length input
    const lengthInput = document.getElementById('rectangle-length')
    const length = parseFloat(lengthInput.value)
    // width iinput
    const widthInput = document.getElementById('rectangle-width')
    const width = parseFloat(widthInput.value);
    // area calculation
    const area = length * width;
    console.log('area', area)
    // area output--
    const rectangleArea = document.getElementById('rectangle-area')
    rectangleArea.innerText = area;
}