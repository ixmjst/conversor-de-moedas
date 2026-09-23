# Conversor de Moedas

Conversor de moedas estrangeiras para Kwanza angolano (AOA), feito com HTML, CSS e JavaScript puro — sem frameworks nem dependências.

Informe um valor, escolha a moeda e o resultado aparece formatado no padrão monetário angolano.

## Moedas suportadas

| Moeda | Código | Cotação (Kz) |
| --- | --- | --- |
| Dólar Americano | USD | 917,50 |
| Euro | EUR | 1.051,20 |
| Libra Esterlina | GBP | 1.222,20 |

> As cotações são fixas, definidas no topo do `script.js`. Para atualizá-las, edite as constantes `USD`, `EUR` e `GBP`.

## Funcionalidades

- Campo de valor que aceita apenas dígitos — letras e símbolos são removidos enquanto se digita
- Seleção de moeda obrigatória antes de converter
- Exibição da cotação usada na conversão
- Resultado formatado com `Intl` via `toLocaleString("pt-PT", { currency: "AOA" })`
- Área de resultado escondida até a primeira conversão

## Como executar

Não há build nem instalação. Clone o repositório e abra o `index.html` no navegador:

```bash
git clone git@github.com:ixmjst/conversor-de-moedas.git
cd conversor-de-moedas
```

No Windows: `start index.html` · No macOS: `open index.html` · No Linux: `xdg-open index.html`

Para desenvolvimento, a extensão **Live Server** do VS Code recarrega a página automaticamente a cada alteração.

## Estrutura

```
.
├── index.html      # Marcação do formulário e da área de resultado
├── style.css       # Estilos e tema escuro
├── script.js       # Cotações, validação do input e lógica de conversão
└── assets/
    ├── bg.png             # Imagem de fundo
    ├── logo.svg           # Logo exibido acima do formulário
    ├── chevron-down.svg   # Seta do select
    └── check.svg
```

## Como funciona

`script.js` intercepta o `submit` do formulário e, conforme a moeda escolhida no `<select>`, chama `convertCurrency()` com o valor digitado, a cotação e o símbolo correspondente. A função calcula o total, escreve a cotação e o resultado no rodapé e adiciona a classe `show-result`, que torna o rodapé visível.

## Tecnologias

- HTML5
- CSS3 (Flexbox, propriedades customizadas)
- JavaScript (ES6+)
