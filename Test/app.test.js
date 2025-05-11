let { declararVariable, sumar, restar, multiplicar, dividir, concatenar,
    longitudCadena, esPar, esMayorQueCero, compararIgualdadEstricta, compararDesigualdadEstricta,
    compararMayorQue, compararMenorQue, compararMayorOIgualQue, compararMenorOIgualQue,
    compararNullUndefined } = require("../Ejercicios/app")


// declaracionvariables
describe("Test de variables", () => {
    test("declararVariable debe devolver 10", () => {
        expect(declararVariable()).toBe(10);
    });
});


// operaciones matematicas
describe("Test de operaciones matemáticas", () => {
    test("sumar 2 y 3 debe devolver 5", () => {
        expect(sumar(2, 3)).toBe(5);
    });

    test("restar 5 y 3 debe devolver 2", () => {
        expect(restar(5, 3)).toBe(2);
    });

    test("multiplicar 4 y 3 debe devolver 12", () => {
        expect(multiplicar(4, 3)).toBe(12);
    });

    test("dividir 6 y 2 debe devolver 3", () => {
        expect(dividir(6, 2)).toBe(3);
    });

    test("dividir 5 entre 0 debe devolver error", () => {
        expect(dividir(5, 0)).toBe("Error: División por cero");
    });
});


// cadenas de texto
describe("Test de cadenas de texto", () => {
    test("concatenar 'Hola' y 'Mundo' debe devolver 'Hola Mundo'", () => {
        expect(concatenar("Hola", "Mundo")).toBe("Hola Mundo");
    });

    test("longitud de la cadena 'JavaScript' debe devolver 10", () => {
        expect(longitudCadena("JavaScript")).toBe(10);
    });

    test("longitud de la cadena vacía debe devolver 0", () => {
        expect(longitudCadena("")).toBe(0);
    });
});

// condicionales
describe("Test de condicionales", () => {
    test("esPar(4) debe devolver true", () => {
        expect(esPar(4)).toBe(true);
    });

    test("esPar(5) debe devolver false", () => {
        expect(esPar(5)).toBe(false);
    });

    test("esMayorQueCero(10) debe devolver 'Positivo'", () => {
        expect(esMayorQueCero(10)).toBe("Positivo");
    });

    test("esMayorQueCero(-5) debe devolver 'Negativo'", () => {
        expect(esMayorQueCero(-5)).toBe("Negativo");
    });

    test("esMayorQueCero(0) debe devolver 'Cero'", () => {
        expect(esMayorQueCero(0)).toBe("Cero");
    });
});


    
// comparaciones
describe("comparaIgualdadEstricta: Compara si 5 es estrictamente igual a 5", () => {
    test("Debería ser verdadero", () => {
        expect(compararIgualdadEstricta(5, 5)).toBe(true);
    });
});

describe("compararDesigualdadEstricta: Compara si '5' es igual a 5", () => {
    test("Debería ser falso, ya que son tipos diferentes", () => {
        expect(compararDesigualdadEstricta('5', 5)).toBe(false);
    });
});

describe("compararDesigualdadEstricta: Compara si 5 no es estrictamente igual a '5'", () => {
    test("Debería ser verdadero", () => {
        expect(compararDesigualdadEstricta(5, '5')).toBe(true);
    });
});

describe("compararMayorQue: Compara si 10 es mayor que 5", () => {
    test("Debería ser verdadero", () => {
        expect(compararMayorQue(10, 5)).toBe(true);
    });
});

describe("compararMenorQue: Compara si 3 es menor que 7", () => {
    test("Debería ser verdadero", () => {
        expect(compararMenorQue(3, 7)).toBe(true);
    });
});

describe("compararMayorOIgualQue: Compara si 5 es mayor o igual a 5", () => {
    test("Debería ser verdadero", () => {
        expect(compararMayorOIgualQue(5, 5)).toBe(true);
    });
});

describe("compararMenorOIgualQue: Compara si 4 es menor o igual a 4", () => {
    test("Debería ser verdadero", () => {
        expect(compararMenorOIgualQue(4, 4)).toBe(true);
    });
});

describe("compararNullUndefined: Compara si null es igual a undefined", () => {
    test("Debería ser verdadero, ya que '==' hace una comparación débil", () => {
        expect(compararNullUndefined()).toBe(true);
    });
});
