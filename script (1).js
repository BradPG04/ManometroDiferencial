function calculatePressure() {
    const height = parseFloat(document.getElementById('height').value);
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    // Validación de entrada
    if (isNaN(height) || height < 0) {
        resultDiv.innerHTML = '<span class="text-red-500">Por favor, ingrese una altura válida (mm).</span>';
        return;
    }

    // Constantes
    const g = 9.81; // Aceleración gravitacional (m/s²)
    const density = 1000; // Densidad del agua (kg/m³)
    const heightMeters = height / 1000; // Convertir mm a metros

    // Calcular presión en Pascals (Pa)
    let pressure = density * g * heightMeters;

    // Convertir a la unidad seleccionada
    let result;
    if (unit === 'bar') {
        result = pressure / 100000; // 1 bar = 100000 Pa
    } else if (unit === 'mmh2o') {
        result = pressure / 9.81; // 1 mmH₂O ≈ 9.81 Pa
    } else {
        result = pressure * 10 ; // Pa
    }

    // Redondear a 4 decimales para bar (ya que valores son pequeños)
    result = unit === 'bar' ? Math.round(result * 10000) / 10000 : Math.round(result * 100) / 100;

    resultDiv.innerHTML = `Presión diferencial: ${result} ${unit === 'pa' ? 'Pa' : unit === 'bar' ? 'bar' : 'mmH₂O'}`;
}