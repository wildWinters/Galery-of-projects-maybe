let x:string|number|object|boolean|symbol|null|undefined|bigint = "string";

// сигнатурні функцій це все те саме що і проттотип до блоку коду функції 
// воно дозвоялє нам перезавантажтити фнкції якщо параметр можа буде опустити інакше ттут  нія к
function Stringusman(x: number, y: number): void;
function Stringusman(x: number, y: string): void;
function Stringusman(x: number, y: number, z: string): void;
function Stringusman(x: any, y: any, z?: any): void {
    // Основная реализация функции
    let result = x + (typeof y === 'string' ? y : String(y));
    if (z !== undefined) {
        result += typeof z === 'string' ? z : String(z);
    }
    alert(result);
}