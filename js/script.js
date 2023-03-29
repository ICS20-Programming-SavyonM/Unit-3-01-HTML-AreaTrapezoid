function calculate() {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const area = Math.PI * a * b;
  const circumference = 2 * Math.PI * Math.sqrt((a * a + b * b) / 2);
  const result = `Area: ${area.toFixed(2)}m2 Circumference: ${circumference.toFixed(2)}m2`;
  document.getElementById("result").innerHTML = result;
}