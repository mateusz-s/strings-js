var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach',
    animal = 'Zielone słonie';
console.log(text);
console.log(animal);

var animalUpper = animal.toUpperCase();
console.log(animalUpper);

var textAnimal = text.replace('Papugi', animalUpper);
console.log(textAnimal);

var textAnimalHalfLength = 0;

if ((textAnimal.length % 2) === 0) {
    textAnimalHalfLength = textAnimal.length / 2;
} else {
    textAnimalHalfLength = Math.ceil(textAnimal.length / 2);
}

console.log(textAnimal.substr(textAnimal.indexOf(animalUpper), textAnimalHalfLength));