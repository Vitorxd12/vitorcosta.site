let memoria = 0;
let operadorAnterior = "";
let novaEntrada = true; // controla se deve começar número novo após operador ou resultado

function bPress(botao) {
    const display = document.getElementById("display");
    console.log("m=", memoria, "opAnt=", operadorAnterior, "bpress", botao);

    // Se for número ou ponto
    if (/^\d$/.test(botao) || botao === ".") {
        if (novaEntrada) {
            display.innerHTML = (botao === "." ? "0." : botao);
            novaEntrada = false;
        } else {
            if (botao === "." && display.innerHTML.includes(".")) return; // evita múltiplos pontos
            display.innerHTML += botao;
        }
        return;
    }

    switch (botao) {
        case "+":
        case "-":
        case "*":
        case "/":
            if (operadorAnterior === "") {
                memoria = parseFloat(display.innerHTML);
            } else {
                realizarCalculo(memoria, operadorAnterior, parseFloat(display.innerHTML));
                memoria = parseFloat(display.innerHTML);
            }
            operadorAnterior = botao;
            novaEntrada = true;
            break;

        case "=":
            if (operadorAnterior !== "") {
                realizarCalculo(memoria, operadorAnterior, parseFloat(display.innerHTML));
                operadorAnterior = "";
                novaEntrada = true;
            }
            break;

        case "c":
            memoria = 0;
            operadorAnterior = "";
            display.innerHTML = "0";
            novaEntrada = true;
            break;

        case "<":
            if (!novaEntrada) {
                if (display.innerHTML.length > 1) {
                    display.innerHTML = display.innerHTML.slice(0, -1);
                } else {
                    display.innerHTML = "0";
                }
            }
            break;

        default:
            display.innerHTML = "Erro";
            novaEntrada = true;
            break;
    }
}

function realizarCalculo(num_1, op, num_2) {
    const display = document.getElementById("display");
    console.log("realizarCalculo", num_1, op, num_2);
    let resultado;

    switch (op) {
        case "+":
            resultado = num_1 + num_2;
            break;
        case "-":
            resultado = num_1 - num_2;
            break;
        case "*":
            resultado = num_1 * num_2;
            break;
        case "/":
            if (num_2 === 0) {
                display.innerHTML = "Indefinido";
                memoria = 0;
                operadorAnterior = "";
                return;
            }
            resultado = num_1 / num_2;
            break;
        default:
            display.innerHTML = "Erro";
            memoria = 0;
            operadorAnterior = "";
            return;
    }

    display.innerHTML = resultado.toString();
    memoria = resultado;
}
