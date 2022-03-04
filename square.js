const square = {
  width: 12,
  height: 20,
  Area: function () {
    return this.width * this.height;
  },
  centerPoint: function () {
    return `X:${this.height / 2},Y:${this.width / 2}`;
  },
};
console.log(square.Area());
console.log(square.centerPoint());
