

const PIE = 3.142;

function areaCalculate() {
   const radius = document.getElementById('radius').value;
    
    const area = PIE * radius * radius;
    document.getElementById('result').textContent = area;

}