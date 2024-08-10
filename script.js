document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter o valor de entrada
    const totalConsumption = parseFloat(document.getElementById('totalConsumption').value);

    // Realizar cálculos
    const averageMonthly = totalConsumption / 12;
    const averageMonthlyWithBuffer = averageMonthly * 1.20;
    const panelsNeeded = Math.round(averageMonthlyWithBuffer / 58.58); 

    // Calcular a potência total do sistema
    const systemPower = panelsNeeded * 585; // Potência do sistema em Wp

    
    const totalCostRoof = systemPower / 1000 * 2950; 
    const totalCostGround = systemPower / 1000 * 3300; 
    

    // Formatar valores para reais
    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    // Exibir resultados
    document.getElementById('resultTotalConsumption').textContent = totalConsumption.toFixed(2);
    document.getElementById('resultAverageMonthly').textContent = averageMonthly.toFixed(2);
    document.getElementById('resultAverageMonthlyWithBuffer').textContent = averageMonthlyWithBuffer.toFixed(2);
    document.getElementById('resultPanelsNeeded').textContent = panelsNeeded;
    document.getElementById('resultTotalCostRoof').textContent = formatCurrency(totalCostRoof);
    document.getElementById('resultTotalCostGround').textContent = formatCurrency(totalCostGround);

    document.getElementById('resultList').style.display = 'block';
});
