function converterParaRomano(numero) {
    const romanos = [
        { valor: 1000, numeral: 'M' },
        { valor: 900, numeral: 'CM' },
        { valor: 500, numeral: 'D' },
        { valor: 400, numeral: 'CD' },
        { valor: 100, numeral: 'C' },
        { valor: 90, numeral: 'XC' },
        { valor: 50, numeral: 'L' },
        { valor: 40, numeral: 'XL' },
        { valor: 10, numeral: 'X' },
        { valor: 9, numeral: 'IX' },
        { valor: 5, numeral: 'V' },
        { valor: 4, numeral: 'IV' },
        { valor: 1, numeral: 'I' }
    ];

    let resultado = '';

    for (let i = 0; i < romanos.length; i++) {
        while (numero >= romanos[i].valor) {
            resultado += romanos[i].numeral;
            numero -= romanos[i].valor;
        }
    }

    return resultado;
}

function converterParaDecimal(romano) {
    const valoresRomanos = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let decimal = 0;

    for (let i = 0; i < romano.length; i++) {
        const atual = valoresRomanos[romano.charAt(i)];
        const proximo = valoresRomanos[romano.charAt(i + 1)];

        if (proximo && atual < proximo) {
            decimal -= atual;
        } else {
            decimal += atual;
        }
    }

    return decimal;
}

document.addEventListener('DOMContentLoaded', function() {
    const decimalInput = document.getElementById('decimalInput');
    const romanoInput = document.getElementById('romanoInput');
    const romanoOutput = document.getElementById('romanoOutput');
    const decimalOutput = document.getElementById('decimalOutput');
    const decimalParaRomanoBtn = document.getElementById('decimalParaRomanoBtn');
    const romanoParaDecimalBtn = document.getElementById('romanoParaDecimalBtn');

    decimalParaRomanoBtn.addEventListener('click', function() {
        const numeroDecimal = parseInt(decimalInput.value);

        if (numeroDecimal >= 1 && numeroDecimal <= 3999) {
            const numeroRomano = converterParaRomano(numeroDecimal);
            romanoOutput.value = numeroRomano;
        } else {
            romanoOutput.value = 'Número inválido';
        }
    });

    romanoParaDecimalBtn.addEventListener('click', function() {
        const numeroRomano = romanoInput.value.toUpperCase();

        if (/^[IVXLCDM]+$/.test(numeroRomano)) {
            const numeroDecimal = converterParaDecimal(numeroRomano);
            decimalOutput.value = numeroDecimal;
        } else {
            decimalOutput.value = 'Número inválido';
        }
    });
});
