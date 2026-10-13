const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Bloco 1: Operações Básicas', () => {
  test('1. soma', () => {
    expect(soma(2, 3)).toBe(5);
    expect(soma(-2, -3)).toBe(-5);
    expect(soma(7, -3)).toBe(4);
    expect(soma(0, 0)).toBe(0);
    expect(soma(0.5, 0.25)).toBe(0.75);
  });

  test('2. subtracao', () => {
    expect(subtracao(5, 2)).toBe(3);
    expect(subtracao(2, 5)).toBe(-3);
    expect(subtracao(10, -4)).toBe(14);
    expect(subtracao(0, 0)).toBe(0);
  });

  test('3. multiplicacao', () => {
    expect(multiplicacao(3, 4)).toBe(12);
    expect(multiplicacao(-3, 4)).toBe(-12);
    expect(multiplicacao(-3, -4)).toBe(12);
    expect(multiplicacao(0, 5)).toBe(0);
    expect(multiplicacao(2.5, 2)).toBe(5);
  });

  test('4. divisao', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(divisao(7, 2)).toBe(3.5);
    expect(divisao(-9, 3)).toBe(-3);
    expect(divisao(0, 5)).toBe(0);
    expect(() => divisao(5, 0)).toThrow(new Error('Divisão por zero não é permitida.'));
    expect(() => divisao(0, 0)).toThrow(new Error('Divisão por zero não é permitida.'));
  });

  test('5. potencia', () => {
    expect(potencia(2, 3)).toBe(8);
    expect(potencia(3, 0)).toBe(1);
    expect(potencia(2, -1)).toBe(0.5);
    expect(potencia(9, 0.5)).toBe(3);
    expect(potencia(-2, 3)).toBe(-8);
  });

  test('6. raizQuadrada', () => {
    expect(raizQuadrada(16)).toBe(4);
    expect(raizQuadrada(0)).toBe(0);
    expect(raizQuadrada(2)).toBeCloseTo(1.41421356, 7);
    expect(() => raizQuadrada(-1)).toThrow(new Error('Não é possível calcular a raiz quadrada de um número negativo.'));
    expect(() => raizQuadrada(-0.0001)).toThrow(Error);
  });

  test('7. restoDivisao', () => {
    expect(restoDivisao(10, 3)).toBe(1);
    expect(restoDivisao(10, 2)).toBe(0);
    expect(restoDivisao(5, 7)).toBe(5);
    expect(restoDivisao(-7, 3)).toBe(-1);
    expect(restoDivisao(7, -3)).toBe(1);
  });

  test('8. fatorial', () => {
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(fatorial(2)).toBe(2);
    expect(fatorial(3)).toBe(6);
    expect(fatorial(4)).toBe(24);
    expect(fatorial(5)).toBe(120);
    expect(fatorial(10)).toBe(3628800);
    expect(fatorial(20)).toBe(2432902008176640000);
    expect(() => fatorial(-1)).toThrow(new Error('Fatorial não é definido para números negativos.'));
  });

  test('9. mediaArray', () => {
    expect(mediaArray([10, 20, 30])).toBe(20);
    expect(mediaArray([])).toBe(0);
    expect(mediaArray([5])).toBe(5);
    expect(mediaArray([1, 2])).toBe(1.5);
    expect(mediaArray([-1, 1])).toBe(0);
    expect(mediaArray([1, 2, 4])).toBeCloseTo(7 / 3, 10);
  });

  test('10. somaArray', () => {
    expect(somaArray([1, 2, 3])).toBe(6);
    expect(somaArray([])).toBe(0);
    expect(somaArray([5])).toBe(5);
    expect(somaArray([-1, -2])).toBe(-3);
    expect(somaArray([1.5, 2.5])).toBe(4);
  });
});

describe('Bloco 2: Arrays e Checagens', () => {
  test('11. maximoArray', () => {
    expect(maximoArray([1, 50, 10])).toBe(50);
    expect(maximoArray([50, 10, 1])).toBe(50);
    expect(maximoArray([-5, -1, -10])).toBe(-1);
    expect(maximoArray([7])).toBe(7);
    expect(maximoArray([3, 3])).toBe(3);
    expect(() => maximoArray([])).toThrow(Error);
    expect(() => maximoArray([])).toThrow(/^Array vazio .+ possui valor máximo\.$/);
  });

  test('12. minimoArray', () => {
    expect(minimoArray([10, 2, 100])).toBe(2);
    expect(minimoArray([2, 10, 100])).toBe(2);
    expect(minimoArray([-5, -1, -10])).toBe(-10);
    expect(minimoArray([7])).toBe(7);
    expect(minimoArray([3, 3])).toBe(3);
    expect(() => minimoArray([])).toThrow(Error);
    expect(() => minimoArray([])).toThrow(/^Array vazio .+ possui valor mínimo\.$/);
  });

  test('13. valorAbsoluto', () => {
    expect(valorAbsoluto(-5)).toBe(5);
    expect(valorAbsoluto(5)).toBe(5);
    expect(valorAbsoluto(0)).toBe(0);
    expect(valorAbsoluto(-2.5)).toBe(2.5);
  });

  test('14. arredondar', () => {
    expect(arredondar(9.8)).toBe(10);
    expect(arredondar(9.2)).toBe(9);
    expect(arredondar(2.5)).toBe(3);
    expect(arredondar(0.5)).toBe(1);
    expect(arredondar(-2.5)).toBe(-2);
    expect(arredondar(-9.8)).toBe(-10);
  });

  test('15. isPar', () => {
    expect(isPar(100)).toBe(true);
    expect(isPar(7)).toBe(false);
    expect(isPar(0)).toBe(true);
    expect(isPar(-4)).toBe(true);
    expect(isPar(-3)).toBe(false);
    expect(isPar(2)).toBe(true);
    expect(isPar(1)).toBe(false);
  });

  test('16. isImpar', () => {
    expect(isImpar(7)).toBe(true);
    expect(isImpar(100)).toBe(false);
    expect(isImpar(0)).toBe(false);
    expect(isImpar(-3)).toBe(true);
    expect(isImpar(-4)).toBe(false);
    expect(isImpar(1)).toBe(true);
    expect(isImpar(2)).toBe(false);
  });

  test('17. calcularPorcentagem (percentual, valor)', () => {
    expect(calcularPorcentagem(50, 200)).toBe(100);
    expect(calcularPorcentagem(10, 50)).toBe(5);
    expect(calcularPorcentagem(25, 80)).toBe(20);
    expect(calcularPorcentagem(0, 100)).toBe(0);
    expect(calcularPorcentagem(100, 50)).toBe(50);
    expect(calcularPorcentagem(12.5, 8)).toBe(1);
  });

  test('18. aumentarPorcentagem', () => {
    expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110, 10);
    expect(aumentarPorcentagem(200, 50)).toBeCloseTo(300, 10);
    expect(aumentarPorcentagem(80, 0)).toBe(80);
    expect(aumentarPorcentagem(50, 100)).toBeCloseTo(100, 10);
    expect(aumentarPorcentagem(100, -10)).toBeCloseTo(90, 10);
  });

  test('19. diminuirPorcentagem', () => {
    expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90, 10);
    expect(diminuirPorcentagem(200, 50)).toBeCloseTo(100, 10);
    expect(diminuirPorcentagem(80, 0)).toBe(80);
    expect(diminuirPorcentagem(50, 100)).toBeCloseTo(0, 10);
    expect(diminuirPorcentagem(100, -10)).toBeCloseTo(110, 10);
  });

  test('20. inverterSinal', () => {
    expect(inverterSinal(42)).toBe(-42);
    expect(inverterSinal(-42)).toBe(42);
    expect(inverterSinal(2.5)).toBe(-2.5);
    expect(Object.is(inverterSinal(0), -0)).toBe(true);
  });
});

describe('Bloco 3: Trigonometria e Logaritmos', () => {
  test('21. seno', () => {
    expect(seno(0)).toBe(0);
    expect(seno(Math.PI / 2)).toBeCloseTo(1, 10);
    expect(seno(-Math.PI / 2)).toBeCloseTo(-1, 10);
    expect(seno(Math.PI)).toBeCloseTo(0, 10);
    expect(seno(Math.PI / 6)).toBeCloseTo(0.5, 10);
  });

  test('22. cosseno', () => {
    expect(cosseno(0)).toBe(1);
    expect(cosseno(Math.PI)).toBeCloseTo(-1, 10);
    expect(cosseno(Math.PI / 2)).toBeCloseTo(0, 10);
    expect(cosseno(Math.PI / 3)).toBeCloseTo(0.5, 10);
  });

  test('23. tangente', () => {
    expect(tangente(0)).toBe(0);
    expect(tangente(Math.PI / 4)).toBeCloseTo(1, 10);
    expect(tangente(-Math.PI / 4)).toBeCloseTo(-1, 10);
    expect(tangente(Math.PI)).toBeCloseTo(0, 10);
  });

  test('24. logaritmoNatural', () => {
    expect(logaritmoNatural(Math.E)).toBe(1);
    expect(logaritmoNatural(1)).toBe(0);
    expect(logaritmoNatural(Math.E ** 2)).toBeCloseTo(2, 10);
    expect(logaritmoNatural(0)).toBe(-Infinity);
    expect(logaritmoNatural(-1)).toBeNaN();
  });

  test('25. logaritmoBase10', () => {
    expect(logaritmoBase10(100)).toBe(2);
    expect(logaritmoBase10(1)).toBe(0);
    expect(logaritmoBase10(1000)).toBe(3);
    expect(logaritmoBase10(0.1)).toBeCloseTo(-1, 10);
    expect(logaritmoBase10(0)).toBe(-Infinity);
    expect(logaritmoBase10(-10)).toBeNaN();
  });

  test('26. arredondarParaBaixo', () => {
    expect(arredondarParaBaixo(5.9)).toBe(5);
    expect(arredondarParaBaixo(5)).toBe(5);
    expect(arredondarParaBaixo(-5.1)).toBe(-6);
    expect(arredondarParaBaixo(0.1)).toBe(0);
  });

  test('27. arredondarParaCima', () => {
    expect(arredondarParaCima(5.1)).toBe(6);
    expect(arredondarParaCima(5)).toBe(5);
    expect(arredondarParaCima(-5.9)).toBe(-5);
    expect(arredondarParaCima(0.1)).toBe(1);
  });

  test('28. hipotenusa', () => {
    expect(hipotenusa(3, 4)).toBe(5);
    expect(hipotenusa(5, 12)).toBe(13);
    expect(hipotenusa(0, 7)).toBe(7);
    expect(hipotenusa(-3, 4)).toBe(5);
    expect(hipotenusa(1, 1)).toBeCloseTo(Math.SQRT2, 10);
  });

  test('29. grausParaRadianos', () => {
    expect(grausParaRadianos(180)).toBeCloseTo(Math.PI, 10);
    expect(grausParaRadianos(90)).toBeCloseTo(Math.PI / 2, 10);
    expect(grausParaRadianos(360)).toBeCloseTo(2 * Math.PI, 10);
    expect(grausParaRadianos(-180)).toBeCloseTo(-Math.PI, 10);
    expect(grausParaRadianos(0)).toBe(0);
  });

  test('30. radianosParaGraus', () => {
    expect(radianosParaGraus(Math.PI)).toBeCloseTo(180, 10);
    expect(radianosParaGraus(Math.PI / 2)).toBeCloseTo(90, 10);
    expect(radianosParaGraus(2 * Math.PI)).toBeCloseTo(360, 10);
    expect(radianosParaGraus(-Math.PI)).toBeCloseTo(-180, 10);
    expect(radianosParaGraus(0)).toBe(0);
  });
});

describe('Bloco 4: Teoria dos Números e Sequências', () => {
  test('31. mdc', () => {
    expect(mdc(10, 5)).toBe(5);
    expect(mdc(24, 36)).toBe(12);
    expect(mdc(36, 24)).toBe(12);
    expect(mdc(7, 13)).toBe(1);
    expect(mdc(0, 5)).toBe(5);
    expect(mdc(5, 0)).toBe(5);
    expect(mdc(17, 17)).toBe(17);
    expect(mdc(48, 18)).toBe(6);
  });

  test('32. mmc', () => {
    expect(mmc(10, 5)).toBe(10);
    expect(mmc(4, 6)).toBe(12);
    expect(mmc(3, 7)).toBe(21);
    expect(mmc(6, 6)).toBe(6);
    expect(mmc(21, 6)).toBe(42);
    expect(mmc(0, 5)).toBe(0);
  });

  test('33. isPrimo', () => {
    [2, 3, 5, 7, 11, 13, 97].forEach(p => expect(isPrimo(p)).toBe(true));
    [4, 6, 8, 9, 15, 25, 100].forEach(c => expect(isPrimo(c)).toBe(false));
    [1, 0, -1, -5, -7].forEach(n => expect(isPrimo(n)).toBe(false));
  });

  test('34. fibonacci', () => {
    const esperado = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
    esperado.forEach((v, i) => expect(fibonacci(i)).toBe(v));
    expect(fibonacci(15)).toBe(610);
    expect(fibonacci(20)).toBe(6765);
  });

  test('35. produtoArray', () => {
    expect(produtoArray([2, 3, 4])).toBe(24);
    expect(produtoArray([])).toBe(1);
    expect(produtoArray([5])).toBe(5);
    expect(produtoArray([0, 5])).toBe(0);
    expect(produtoArray([-2, 3])).toBe(-6);
    expect(produtoArray([1.5, 2])).toBe(3);
  });

  test('35b. produtoArray retorna cedo para array vazio (sem chamar reduce)', () => {
    const vazio = [];
    const espiao = jest.spyOn(vazio, 'reduce');
    expect(produtoArray(vazio)).toBe(1);
    expect(espiao).not.toHaveBeenCalled();
  });

  test('36. clamp', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
    expect(clamp(-3, -5, -1)).toBe(-3);
    // limites invertidos (min > max): a checagem de min tem prioridade
    expect(clamp(5, 5, 0)).toBe(0);
    expect(clamp(5, 10, 0)).toBe(10);
    expect(clamp(5, 0, 5)).toBe(5);
  });

  test('36b. clamp devolve o próprio valor (não o limite) quando ele é igual ao máximo', () => {
    // Object.is distingue 0 de -0: se retornasse "max", viria -0
    expect(clamp(0, -5, -0)).toBe(0);
  });

  test('37. isDivisivel', () => {
    expect(isDivisivel(10, 2)).toBe(true);
    expect(isDivisivel(10, 3)).toBe(false);
    expect(isDivisivel(0, 5)).toBe(true);
    expect(isDivisivel(7, 7)).toBe(true);
    expect(isDivisivel(-6, 3)).toBe(true);
    expect(isDivisivel(5, 10)).toBe(false);
  });

  test('38. celsiusParaFahrenheit', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBe(212);
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
    expect(celsiusParaFahrenheit(20)).toBe(68);
    expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6, 10);
  });

  test('39. fahrenheitParaCelsius', () => {
    expect(fahrenheitParaCelsius(32)).toBe(0);
    expect(fahrenheitParaCelsius(212)).toBe(100);
    expect(fahrenheitParaCelsius(-40)).toBe(-40);
    expect(fahrenheitParaCelsius(50)).toBe(10);
    expect(fahrenheitParaCelsius(98.6)).toBeCloseTo(37, 10);
  });

  test('40. inverso', () => {
    expect(inverso(4)).toBe(0.25);
    expect(inverso(0.5)).toBe(2);
    expect(inverso(-2)).toBe(-0.5);
    expect(inverso(1)).toBe(1);
    expect(() => inverso(0)).toThrow(new Error('Não é possível inverter o número zero.'));
  });
});

describe('Bloco 5: Geometria e Comparações', () => {
  test('41. areaCirculo', () => {
    expect(areaCirculo(10)).toBeCloseTo(314.1592653589793, 10);
    expect(areaCirculo(1)).toBeCloseTo(Math.PI, 10);
    expect(areaCirculo(2)).toBeCloseTo(12.566370614359172, 10);
    expect(areaCirculo(0)).toBe(0);
  });

  test('42. areaRetangulo', () => {
    expect(areaRetangulo(5, 4)).toBe(20);
    expect(areaRetangulo(3, 7)).toBe(21);
    expect(areaRetangulo(0, 5)).toBe(0);
    expect(areaRetangulo(2.5, 4)).toBe(10);
  });

  test('43. perimetroRetangulo', () => {
    expect(perimetroRetangulo(5, 4)).toBe(18);
    expect(perimetroRetangulo(3, 7)).toBe(20);
    expect(perimetroRetangulo(1, 0)).toBe(2);
    expect(perimetroRetangulo(2.5, 1.5)).toBe(8);
  });

  test('44. isMaiorQue', () => {
    expect(isMaiorQue(10, 5)).toBe(true);
    expect(isMaiorQue(5, 10)).toBe(false);
    expect(isMaiorQue(5, 5)).toBe(false);
    expect(isMaiorQue(-1, -2)).toBe(true);
    expect(isMaiorQue(-2, -1)).toBe(false);
  });

  test('45. isMenorQue', () => {
    expect(isMenorQue(5, 10)).toBe(true);
    expect(isMenorQue(10, 5)).toBe(false);
    expect(isMenorQue(5, 5)).toBe(false);
    expect(isMenorQue(-2, -1)).toBe(true);
    expect(isMenorQue(-1, -2)).toBe(false);
  });

  test('46. isEqual', () => {
    expect(isEqual(7, 7)).toBe(true);
    expect(isEqual(7, 8)).toBe(false);
    expect(isEqual(7, '7')).toBe(false);
    expect(isEqual(NaN, NaN)).toBe(false);
    expect(isEqual(0, -0)).toBe(true);
    expect(isEqual('a', 'a')).toBe(true);
  });

  test('47. medianaArray', () => {
    expect(medianaArray([1, 2, 3, 4, 5])).toBe(3);
    expect(medianaArray([1, 10, 2, 8, 5])).toBe(5);
    expect(medianaArray([5, 3, 1, 4, 2])).toBe(3);
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
    expect(medianaArray([4, 1, 3, 2])).toBe(2.5);
    expect(medianaArray([10, 1, 5, 7])).toBe(6);
    expect(medianaArray([7])).toBe(7);
    expect(medianaArray([3, 1])).toBe(2);
    expect(medianaArray([2, 2])).toBe(2);
    expect(medianaArray([-5, -1, -3])).toBe(-3);
    expect(medianaArray([10, 9, 8, 100, 1, 2])).toBe(8.5);
    expect(() => medianaArray([])).toThrow(Error);
    expect(() => medianaArray([])).toThrow(/^Array vazio .+ possui mediana\.$/);
  });

  test('47b. medianaArray não altera o array original', () => {
    const entrada = [5, 3, 1, 4, 2];
    medianaArray(entrada);
    expect(entrada).toEqual([5, 3, 1, 4, 2]);
  });

  test('48. dobro', () => {
    expect(dobro(10)).toBe(20);
    expect(dobro(-3)).toBe(-6);
    expect(dobro(1.5)).toBe(3);
    expect(dobro(0)).toBe(0);
  });

  test('49. triplo', () => {
    expect(triplo(10)).toBe(30);
    expect(triplo(-2)).toBe(-6);
    expect(triplo(1.5)).toBe(4.5);
    expect(triplo(0)).toBe(0);
  });

  test('50. metade', () => {
    expect(metade(20)).toBe(10);
    expect(metade(7)).toBe(3.5);
    expect(metade(-9)).toBe(-4.5);
    expect(metade(0)).toBe(0);
  });
});