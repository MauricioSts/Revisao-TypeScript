const THRESHOLD = 10;

function fuzzysort(arr: number[]): void {
    fuzzysortRange(arr, 0, arr.length - 1);
}

function fuzzysortRange(arr: number[], left: number, right: number): void {
    if (left >= right) return;

    const tamanho = right - left + 1;
    if (tamanho <= THRESHOLD) {
        insertionSortRange(arr, left, right);
        return;
    }

    let minIdx = left;
    for (let i = left + 1; i <= right; i++) {
        if (arr[i] < arr[minIdx]) {
            minIdx = i;
        }
    }

    if (minIdx !== left) {
        [arr[left], arr[minIdx]] = [arr[minIdx], arr[left]];
    }

    for (let i = left; i < right; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    fuzzysortRange(arr, left + 1, right - 1);
}

function insertionSortRange(arr: number[], left: number, right: number): void {
    for (let i = left + 1; i <= right; i++) {
        const chave = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > chave) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = chave;
    }
}

function bubbleSort(arr: number[]): void {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

function selectionSort(arr: number[]): void {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
}

function insertionSort(arr: number[]): void {
    for (let i = 1; i < arr.length; i++) {
        const chave = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > chave) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = chave;
    }
}

function gerarVetor(tamanho: number): number[] {
    return Array.from({ length: tamanho }, () => Math.floor(Math.random() * 100000));
}

function testarAlgoritmo(nome: string, algoritmo: (arr: number[]) => void, vetor: number[]): number {
    const copia = [...vetor];
    const inicio = performance.now();
    algoritmo(copia);
    const fim = performance.now();
    return fim - inicio;
}

function main(): void {
    const tamanhos = [10, 100, 1000, 10000, 100000];
    const algoritmos = [
        { nome: "Bubble Sort", func: bubbleSort },
        { nome: "Selection Sort", func: selectionSort },
        { nome: "Insertion Sort", func: insertionSort },
        { nome: "Fuzzy Sort", func: fuzzysort }
    ];

    for (const tamanho of tamanhos) {
        console.log(`\n--- Tamanho: ${tamanho} ---`);
        const base = gerarVetor(tamanho);

        for (const alg of algoritmos) {
            if ((alg.nome !== "Fuzzy Sort") && tamanho > 10000) {
                console.log(`${alg.nome}: pulado (muito lento)`);
                continue;
            }

            try {
                const tempo = testarAlgoritmo(alg.nome, alg.func, base);
                console.log(`${alg.nome}: ${tempo.toFixed(2)} ms`);
            } catch (e) {
                console.log(`${alg.nome}: ERRO (${e})`);
            }
        }
    }
}

main();