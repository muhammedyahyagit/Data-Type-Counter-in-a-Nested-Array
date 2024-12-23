let arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];

let stringCount = 0;
let numberCount = 0;
let booleanCount = 0;

let array = [arr]; 

while (array.length > 0) {
    let currentArray = array.pop(); 
    for (let i = 0; i < currentArray.length; i++) {
        let element = currentArray[i];
        let type = typeof element;

        if (Array.isArray(element)) {
            array.push(element);
        } else if (type === "string") {
            stringCount++;
        } else if (type === "number") {
            numberCount++;
        } else if (type === "boolean") {
            booleanCount++;
        }
    }
}

console.log(`Strings: ${stringCount}` , `Numbers: ${numberCount}` , `Booleans: ${booleanCount}`);
