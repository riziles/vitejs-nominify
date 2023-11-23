import { testfunc } from './counter';

/**
 * Test function
 * @license MIT
 * @param {number} x - Pick a number.
 */
function testfunc2(x: number): number {
  return testfunc(x) + 64;
}

window.addEventListener('load', function () {
  document.write(String(testfunc2(3)));
});

// new EventSource('/esbuild').addEventListener('change', () => location.reload())
