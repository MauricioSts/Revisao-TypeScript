function numeoRandom(){
    let numeroAleatorio = (Math.random()*100 ) + 1
    
    return Math.floor(numeroAleatorio);
   
}

console.log(numeoRandom())

class BrowserHistory {
    private backStack: string[] = [];
    private forwardStack: string[] = [];
    private current: string;

    constructor(paginaInicial: string) {
        this.current = paginaInicial;
    }

    visit(url: string): void {
        this.backStack.push(this.current);
        this.current = url;
        this.forwardStack = []; // limpa o histórico de avanço
    }

    back(): string | null {
        if (this.backStack.length === 0) {
            return null;
        }
        this.forwardStack.push(this.current);
        this.current = this.backStack.pop()!;
        return this.current;
    }

    forward(): string | null {
        if (this.forwardStack.length === 0) {
            return null;
        }
        this.backStack.push(this.current);
        this.current = this.forwardStack.pop()!;
        return this.current;
    }

    getCurrentPage(): string {
        return this.current;
    }
}

// -------------------
// Testes de simulação
// -------------------

const navegador = new BrowserHistory("home.com");

console.log("Página atual:", navegador.getCurrentPage()); // home.com

navegador.visit("google.com");
navegador.visit("openai.com");

console.log("Página atual:", navegador.getCurrentPage()); // openai.com

console.log("Voltar:", navegador.back()); // google.com
console.log("Página atual:", navegador.getCurrentPage()); // google.com

console.log("Voltar:", navegador.back()); // home.com
console.log("Voltar:", navegador.back()); // null

console.log("Avançar:", navegador.forward()); // google.com

navegador.visit("github.com"); // limpa forwardStack

console.log("Página atual:", navegador.getCurrentPage()); // github.com
console.log("Avançar:", navegador.forward()); // null