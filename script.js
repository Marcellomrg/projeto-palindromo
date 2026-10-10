function ehPalindromo(texto) {
  if (!texto) return false;
  const textoNormalizado = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
  const textoInvertido = textoNormalizado.split('').reverse().join('');
  return textoNormalizado === textoInvertido;
}

function verificar() {
  const input = document.getElementById('input-texto');
  const resultadoEl = document.getElementById('resultado');
  const texto = input.value;
  if (ehPalindromo(texto)) {
    resultadoEl.textContent = 'Sim, "' + texto + '" é um palíndromo!';
    resultadoEl.className = 'sucesso';
  } else {
    resultadoEl.textContent = 'Não, "' + texto + '" não é um palíndromo.';
    resultadoEl.className = 'erro';
  }
}

if (typeof module !== 'undefined') {
  module.exports = { ehPalindromo };
}
