let expressao = "";
// ===================================================
// FATORIAL
// ===================================================

/**
 * Calcula o fatorial de um número n (n!)
 * Exemplo: fatorial(5) = 5 × 4 × 3 × 2 × 1 = 120
 * 
 * Por definição:
 * - fatorial(0) = 1
 * - fatorial(1) = 1
 * 
 * Utilizado em séries de Taylor como sen(x), cos(x), ln(x)
 */
function fatorial(n) {
    if (n === 0 || n === 1) return 1; // Casos base
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i; // Multiplica progressivamente
    }
    return res;
}

// ===================================================
// GRAUS → RADIANOS
// ===================================================

/**
 * Converte um valor em graus para radianos.
 * Fórmula: rad = graus × π / 180
 * Usado porque as funções trigonométricas em séries de Taylor assumem entrada em radianos.
 */
function degToRad(x) {
    return x * Math.PI / 180;
}

// ===================================================
// SENO
// ===================================================

/**
 * Calcula o seno de um ângulo (em graus) usando série de Taylor:
 * 
 * Série de Taylor para sin(x) em radianos:
 * sin(x) = x - x³/3! + x⁵/5! - x⁷/7! + ... até n termos
 * 
 * Quanto mais termos, mais precisa.
 */
function sin(x) {
    x = degToRad(x); // Converte para radianos
    let result = 0;
    for (let i = 0; i < 10; i++) {
        let termo = ((-1) ** i) * (x ** (2 * i + 1)) / fatorial(2 * i + 1);
        result += termo;
    }
    return result;
}

// ===================================================
// COSSENO
// ===================================================

/**
 * Calcula o cosseno de um ângulo (em graus) usando série de Taylor:
 * 
 * cos(x) = 1 - x²/2! + x⁴/4! - x⁶/6! + ... até n termos
 */
function cos(x) {
    x = degToRad(x); // Converte para radianos
    let result = 0;
    for (let i = 0; i < 10; i++) {
        let termo = ((-1) ** i) * (x ** (2 * i)) / fatorial(2 * i);
        result += termo;
    }
    return result;
}

// ===================================================
// TANGENTE
// ===================================================

/**
 * Calcula a tangente de um ângulo (em graus) como:
 * tg(x) = sen(x) / cos(x)
 * 
 * Verifica se o denominador é quase zero (evita divisão por zero).
 */
function tg(x) {
    const c = cos(x);
    if (Math.abs(c) < 1e-10) throw new Error("Tangente indefinida");
    return sin(x) / c;
}

// ===================================================
// LOGARITMO NATURAL (ln)
// ===================================================

/**
 * Calcula ln(x) (logaritmo natural) usando série de Taylor modificada.
 * 
 * A série usada é a de ln(x) a partir de uma substituição:
 * ln(x) = 2 * Σ [ (1 / (2n + 1)) * ((x - 1)/(x + 1))^(2n + 1) ]
 * 
 * Essa série converge bem quando x está próximo de 1. Para garantir isso:
 * - se x for muito grande ou muito pequeno, aplicamos fatoração:
 *   ln(x) = ln(x / e^k) + k  → reduzimos x para perto de 1
 */
function ln(x) {
    if (x <= 0) throw new Error("Log inválido: ln só é definido para x > 0");

    let k = 0;

    // Redução de escala para manter x próximo de 1
    while (x > 1.5) {
        x /= Math.E;
        k++;
    }
    while (x < 0.5) {
        x *= Math.E;
        k--;
    }

    // Aplica a série para ln(x)
    let z = (x - 1) / (x + 1);
    let sum = 0;
    let n = 20; // Mais termos = mais precisão
    for (let i = 0; i < n; i++) {
        let termo = (1 / (2 * i + 1)) * (z ** (2 * i + 1));
        sum += termo;
    }

    return 2 * sum + k; // Compensação pela escala com Math.E
}

// ===================================================
// LOGARITMO DECIMAL (base 10)
// ===================================================

/**
 * Calcula log(x) na base 10:
 * log(x) = ln(x) / ln(10)
 * 
 * Aproveita a função ln(x) para base natural.
 */
function log(x) {
    return ln(x) / ln(10);
}

// ===================================================
// RAIZ QUADRADA
// ===================================================

/**
 * Calcula a raiz quadrada de x usando o método de Newton-Raphson.
 * 
 * O método começa com um chute inicial e melhora esse chute iterativamente:
 * guess = (guess + x / guess) / 2
 * 
 * Para até atingir uma precisão mínima (epsilon).
 */
function raiz(x) {
    if (x < 0) throw new Error("Raiz de número negativo");

    let guess = x / 2;    // Chute inicial
    let epsilon = 1e-10;  // Precisão desejada

    while (Math.abs(guess * guess - x) > epsilon) {
        guess = (guess + x / guess) / 2;
    }

    return guess;
}


function formatExpression(exp) {
    return exp
        .replace(/log\(/g, "log(")
        .replace(/raiz\(/g, "√(")
        .replace(/sin\(/g, "sin(")
        .replace(/cos\(/g, "cos(")
        .replace(/tg\(/g, "tg(")
        .replace(/Math\.PI/g, "π")
        .replace(/Math\.E/g, "e")
        .replace(/\*\*/g, "^");
}

function preprocessExpression(exp) {
    exp = exp
        .replace(/sin\(/g, 'sin(')
        .replace(/cos\(/g, 'cos(')
        .replace(/tg\(/g, 'tg(')
        .replace(/log\(/g, 'log(')
        .replace(/raiz\(/g, 'raiz(')
        .replace(/π/g, Math.PI.toString())
        .replace(/e/g, Math.E.toString());

    return exp
        .replace(/(\d|\))(?=\()/g, '$1*')
        .replace(/(\d|\))(?=[a-zA-Z])/g, '$1*');
}

function bPress(botao) {
    const regexNumero = /^-?\d+(\.\d+)?$/;
    if (regexNumero.test(botao) || botao === '.') {
        displayBuild(botao);
    } else {
        oPress(botao);
    }
}

function displayBuild(botao) {
    let display = document.getElementById('display');
    if (display.innerHTML === "0") {
        expressao = botao;
    } else {
        expressao += botao;
    }
    display.innerHTML = formatExpression(expressao);
}

function clearDisplay() {
    document.getElementById('display').innerHTML = "0";
    expressao = "";
}

function oPress(botao) {
    let display = document.getElementById('display');
    if (botao === "=") {
        try {
            let toEval = preprocessExpression(expressao);
            let open = (toEval.match(/\(/g) || []).length;
            let close = (toEval.match(/\)/g) || []).length;

            if (open > close) {
                toEval += ')'.repeat(open - close);
            } else if (close > open) {
                let diff = close - open;
                for (let i = 0; i < diff; i++) {
                    let lastClose = toEval.lastIndexOf(')');
                    if (lastClose !== -1) {
                        toEval = toEval.slice(0, lastClose) + toEval.slice(lastClose + 1);
                    }
                }
            }

            let resultado = eval(toEval);
            if (typeof resultado === 'number') {
                resultado = parseFloat(resultado.toFixed(10));
            }
            display.innerHTML = resultado;
            expressao = resultado.toString();
        } catch (e) {
            display.innerHTML = "Erro";
            expressao = "";
        }
    } else if (botao === "c") {
        clearDisplay();
    } else if (botao === "<") {
        const functionPatterns = [
            { regex: /^sin\($/, length: 4 },
            { regex: /^cos\($/, length: 4 },
            { regex: /^tg\($/, length: 3 },
            { regex: /^log\($/, length: 4 },
            { regex: /^raiz\($/, length: 5 },
            { regex: /^Math\.PI$/, length: 7 },
            { regex: /^Math\.E$/, length: 6 },
        ];
        let removed = false;
        for (const fn of functionPatterns) {
            if (fn.regex.test(expressao.slice(-fn.length))) {
                expressao = expressao.slice(0, -fn.length);
                removed = true;
                break;
            }
        }
        if (!removed) {
            if (expressao.slice(-2) === "**") {
                expressao = expressao.slice(0, -2);
            } else {
                expressao = expressao.slice(0, -1);
            }
        }
        display.innerHTML = expressao === "" ? "0" : formatExpression(expressao);
    } else {
        expressao += botao;
        display.innerHTML = formatExpression(expressao);
    }
}

document.addEventListener('keydown', function (event) {
    const keyMap = {
        'Enter': '=',
        'Backspace': '<',
        'Delete': 'c',
        '^': '**',
    };

    let key = event.key;

    if (keyMap[key]) {
        bPress(keyMap[key]);
        event.preventDefault();
        return;
    }

    if (/^[0-9+\-*/().]$/.test(key)) {
        bPress(key);
        event.preventDefault();
        return;
    }

    if (key === 'l') { bPress('log('); event.preventDefault(); }
    if (key === 'c') { bPress('cos('); event.preventDefault(); }
    if (key === 's') { bPress('sin('); event.preventDefault(); }
    if (key === 't') { bPress('tg('); event.preventDefault(); }
    if (key === 'r') { bPress('raiz('); event.preventDefault(); }
    if (key === 'p') { bPress('π'); event.preventDefault(); }
    if (key === 'e') { bPress('e'); event.preventDefault(); }
});
