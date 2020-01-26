// Best Solution
export const maskify = cc => (cc.length <= 4 ? cc : "#".repeat(cc.length - 4) + cc.substring(cc.length - 4));

// More Explanatory Solution
export function maskify2(cc) {
  if (cc.length <= 4) {
    return cc;
  } else {
    const hashedValues = "#".repeat(cc.length - 4);
    const last4Digits = cc.substring(cc.length - 4);
    return hashedValues + last4Digits;
  }
}
