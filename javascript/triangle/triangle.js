//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    //throw new Error("Remove this statement and implement this function");
  }

  isViolatingTriangleInequality() {
    if (this.a > this.b + this.c) return true;
    if (this.b > this.a + this.c) return true;
    if (this.c > this.a + this.b) return true;
  }

  isEquilateral() {
    if (this.a !== 0 && this.a === this.b && this.b === this.c) return true;
    return false;
    //throw new Error('Remove this statement and implement this function');
  }

  isIsosceles() {
    if (
      (this.a === this.b || this.a === this.c || this.b === this.c) &&
      !this.isViolatingTriangleInequality()
    )
      return true;
    return false;
    //throw new Error('Remove this statement and implement this function');
  }

  isScalene() {
    if (
      this.a !== this.b &&
      this.b !== this.c &&
      !this.isViolatingTriangleInequality()
    )
      return true;
    return false;
    //throw new Error('Remove this statement and implement this function');
  }
}
