let expressao = "";

// ===================================================
// FATORIAL
// ===================================================
export function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

// ===================================================
// GRAUS → RADIANOS
// ===================================================
export function degToRad(x) {
    return x * Math.PI / 180;
}

// ===================================================
// SENO
// ===================================================
export function sin(x) {
    x = degToRad(x);
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
export function cos(x) {
    x = degToRad(x);
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
export function tg(x) {
    const c = cos(x);
    if (Math.abs(c) < 1e-10) throw new Error("Tangente indefinida");
    return sin(x) / c;
}

// ===================================================
// LOGARITMOS
// ===================================================
export function ln(x) {
    if (x <= 0) throw new Error("Log inválido: ln só é definido para x > 0");
    let k = 0;
    while (x > 1.5) { x /= Math.E; k++; }
    while (x < 0.5) { x *= Math.E; k--; }
    let z = (x - 1) / (x + 1);
    let sum = 0;
    let n = 20;
    for (let i = 0; i < n; i++) sum += (1 / (2 * i + 1)) * (z ** (2 * i + 1));
    return 2 * sum + k;
}

export function log(x) {
    return ln(x) / ln(10);
}

// ===================================================
// RAIZ
// ===================================================
export function raiz(x) {
    if (x < 0) throw new Error("Raiz de número negativo");
    let guess = x / 2;
    let epsilon = 1e-10;
    while (Math.abs(guess * guess - x) > epsilon) guess = (guess + x / guess) / 2;
    return guess;
}

// ===================================================
// EXPRESSÃO
// ===================================================
export function formatExpression(exp) {
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

export function preprocessExpression(exp) {
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

// ===================================================
// BOTÕES
// ===================================================
export function bPress(botao, updateDisplay) {
    const regexNumero = /^-?\d+(\.\d+)?$/;
    if (regexNumero.test(botao) || botao === '.') displayBuild(botao, updateDisplay);
    else oPress(botao, updateDisplay);
}

function displayBuild(botao, updateDisplay) {
    if (expressao === "0") expressao = botao;
    else expressao += botao;
    updateDisplay(formatExpression(expressao));
}

function clearDisplay(updateDisplay) {
    expressao = "";
    updateDisplay("0");
}

function oPress(botao, updateDisplay) {
    if (botao === "=") {
        try {
            let toEval = preprocessExpression(expressao);
            let open = (toEval.match(/\(/g) || []).length;
            let close = (toEval.match(/\)/g) || []).length;

            if (open > close) toEval += ')'.repeat(open - close);
            else if (close > open) {
                let diff = close - open;
                for (let i = 0; i < diff; i++) {
                    let lastClose = toEval.lastIndexOf(')');
                    if (lastClose !== -1) toEval = toEval.slice(0, lastClose) + toEval.slice(lastClose + 1);
                }
            }

            let resultado = eval(toEval);
            if (typeof resultado === 'number') resultado = parseFloat(resultado.toFixed(10));
            expressao = resultado.toString();
            updateDisplay(resultado);
        } catch (e) {
            expressao = "";
            updateDisplay("Erro");
        }
    } else if (botao === "c") clearDisplay(updateDisplay);
    else if (botao === "<") {
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
            if (expressao.slice(-2) === "**") expressao = expressao.slice(0, -2);
            else expressao = expressao.slice(0, -1);
        }
        updateDisplay(expressao === "" ? "0" : formatExpression(expressao));
    } else {
        expressao += botao;
        updateDisplay(formatExpression(expressao));
    }
}

// ===================================================
// TECLADO
// ===================================================
export function bindKeyboard(updateDisplay) {
    document.addEventListener('keydown', function (event) {
        const keyMap = { 'Enter': '=', 'Backspace': '<', 'Delete': 'c', '^': '**' };
        let key = event.key;

        if (keyMap[key]) { bPress(keyMap[key], updateDisplay); event.preventDefault(); return; }
        if (/^[0-9+\-*/().]$/.test(key)) { bPress(key, updateDisplay); event.preventDefault(); return; }
        if (key === 'l') { bPress('log(', updateDisplay); event.preventDefault(); }
        if (key === 'c') { bPress('cos(', updateDisplay); event.preventDefault(); }
        if (key === 's') { bPress('sin(', updateDisplay); event.preventDefault(); }
        if (key === 't') { bPress('tg(', updateDisplay); event.preventDefault(); }
        if (key === 'r') { bPress('raiz(', updateDisplay); event.preventDefault(); }
        if (key === 'p') { bPress('π', updateDisplay); event.preventDefault(); }
        if (key === 'e') { bPress('e', updateDisplay); event.preventDefault(); }
    });
}
