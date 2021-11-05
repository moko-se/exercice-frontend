const notes = [10, 13, 13, 12, 15, 12, 11, 16, 14];
let sum = 0;
let moyenne = 0;

const computeNotes = (notes) => {
	notes.forEach(note => {
		sum += note;
	})
	
	moyenne = sum/notes.length;
	return moyenne;
}
console.log(computeNotes(notes));
