let expressao = "";

function formatExpression(exp) {
    return exp
        .replace(/Math\.log\(/g, "log(")
        .replace(/Math\.sqrt\(/g, "√(")
        .replace(/Math\.sin\(/g, "sin(")
        .replace(/Math\.cos\(/g, "cos(")
        .replace(/Math\.tan\(/g, "tg(")
        .replace(/Math\.PI/g, "π")
        .replace(/Math\.E/g, "e")
        .replace(/\*\*/g, "^");
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
            let resultado = eval(toEval);
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
            { regex: /^Math\.sqrt\($/, length: 10 },
            { regex: /^Math\.log\($/, length: 9 },
            { regex: /^Math\.sin\($/, length: 9 },
            { regex: /^Math\.cos\($/, length: 9 },
            { regex: /^Math\.tan\($/, length: 9 },
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
        if (expressao === "") {
            display.innerHTML = "0";
        } else {
            display.innerHTML = formatExpression(expressao);
        }
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

    if (
        /^[0-9+\-*/().]$/.test(key)
    ) {
        bPress(key);
        event.preventDefault();
        return;
    }

    if (key === 'l') { bPress('Math.log('); event.preventDefault(); }
    if (key === 'c') { bPress('Math.cos('); event.preventDefault(); }
    if (key === 's') { bPress('Math.sin('); event.preventDefault(); }
    if (key === 't') { bPress('Math.tan('); event.preventDefault(); }
    if (key === 'r') { bPress('Math.sqrt('); event.preventDefault(); }
    if (key === 'p') { bPress('Math.PI'); event.preventDefault(); }
    if (key === 'e') { bPress('Math.E'); event.preventDefault(); }
});

function preprocessExpression(exp) {
    // Corrigir funções trigonométricas para graus
    exp = exp.replace(/Math\.sin\(([^)]+)\)/g, 'Math.sin(($1)*Math.PI/180)');
    exp = exp.replace(/Math\.cos\(([^)]+)\)/g, 'Math.cos(($1)*Math.PI/180)');
    exp = exp.replace(/Math\.tan\(([^)]+)\)/g, 'Math.tan(($1)*Math.PI/180)');

    // Corrigir log para log de base 10
    exp = exp.replace(/Math\.log\(([^)]+)\)/g, '(Math.log($1)/Math.log(10))');

    // Adicionar multiplicação implícita
    return exp
        .replace(/(\d|\))(?=\()/g, '$1*')
        .replace(/(\d|\))(?=Math\.)/g, '$1*');
}
