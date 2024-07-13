function verificarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais, o que não é permitido
    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;

    // Verifica o primeiro dígito verificador
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
        return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto;

    // Verifica o segundo dígito verificador
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    // CPF válido
    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    const verificarBtn = document.getElementById('verificarBtn');
    const cpfInput = document.getElementById('cpfInput');
    const resultado = document.getElementById('resultado');

    verificarBtn.addEventListener('click', function() {
        const cpf = cpfInput.value.trim();

        if (verificarCPF(cpf)) {
            resultado.textContent = 'CPF válido.';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = 'CPF inválido.';
            resultado.style.color = 'red';
        }
    });
});
