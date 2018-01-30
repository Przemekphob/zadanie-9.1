
function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		
		return console.log("Nieprawidłowe dane");
	} else {
		return wynik = a*h/2;
	}
}

var triangle1Area = getTriangleArea(10, 15);
console.log(triangle1Area)

var triangle2Area = getTriangleArea(6, 5);
console.log(triangle2Area)

var triangle3Area = getTriangleArea(2, 4);
console.log(triangle3Area)
