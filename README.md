# Projeto Palíndromo

Atividade de testes automatizados desenvolvida no **StackBlitz**, conforme orientação do professor.

Editor: https://stackblitz.com/~/github.com/Marcellomrg/projeto-palindromo
Repositório: https://github.com/Marcellomrg/projeto-palindromo
CI: https://github.com/Marcellomrg/projeto-palindromo/actions

## Executar

No terminal do StackBlitz, use:

```sh
node teste.js
npm start
```

A aplicação abre na prévia da porta 3000 e não requer dependências externas.
O GitHub Actions testa cada push na main com Node.js 20.
A configuração de Codespaces do PDF foi preservada, mas o ambiente utilizado nesta entrega é o StackBlitz.

## Testes

- arara: true
- Ame a ema: true
- gato: false
- string vazia: false
- Subi no onibus: true

## Demonstração de CI

Remover .toLowerCase() causa falha em Ame a ema e Subi no onibus.
Restaurar .toLowerCase() faz os cinco testes passarem novamente.
O teste encerra com código 1 se houver falhas.

## Observações do enunciado

A expressão /[^a-z0-9]/g exclui caracteres acentuados; ela não os converte em letras sem acento. Os testes foram mantidos conforme o PDF.
Sem .toLowerCase(), o filtro exclui as iniciais maiúsculas. Por isso dois testes falham, e não apenas um como descrito no enunciado.
