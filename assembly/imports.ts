// this file import things passed in from JS, and exports them for use by other
// AS modules.

// @ts-ignore
// prettier-ignore

export declare namespace MathUtil {
  @external("Math", "max")
  function max(a: f64, b: f64, c?: f64): f64;

  @external("Math", "hypot")
  function hypot(a: f64, b: f64, c?: f64, d?: f64, e?: f64, f?: f64, g?: f64, h?: f64, i?: f64, j?: f64, k?: f64, l?: f64, m?: f64, n?: f64, o?: f64, p?: f64): f64;
}
