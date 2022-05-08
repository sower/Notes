



[阶乘](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/factorial/README.zh-CN.md)

[斐波那契数](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/fibonacci)  <br />  经典 和 闭式 版本

[素数检测](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/primality-test) (排除法)

[欧几里得算法](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/euclidean-algorithm) - 计算最大公约数 (GCD)
```java
function euclideanAlgorithm(originalA, originalB) {
  // Make input numbers positive.
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  // To make algorithm work faster instead of subtracting one number from the other
  // we may use modulo operation.
  return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}
```

[最小公倍数](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/least-common-multiple) (LCM)
```java
function leastCommonMultiple(a, b) {
  return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);
}
```

[素数筛](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/math/sieve-of-eratosthenes)  <br />  查找任意给定范围内的所有素数












# Resource

- [math-as-code](https://github.com/Jam3/math-as-code)
- [programmers-introduction-to-mathematics](https://github.com/pim-book/programmers-introduction-to-mathematics)
- [awesome-math](https://github.com/rossant/awesome-math)
