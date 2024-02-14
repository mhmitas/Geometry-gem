function calculateTriangleArea() {
    // get triangle base
    const triangleBase = document.getElementById('triangle-base')
    const base = parseFloat(triangleBase.value)
    // console.log(base)

    // get triangle base
    const triangleHeight = document.getElementById('triangle-height')
    const height = parseFloat(triangleHeight.value)
    // console.log(height)

    const area = 0.5 * base * height;
    // console.log('area =',area)
    const triangleArea = document.getElementById('triangle-area')
    triangleArea.innerText = area;
}