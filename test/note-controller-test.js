function testInsertHTML() {
  let noteList = new NoteList();
  noteList.addNew('Carpe diem. Seize the day, boys. Make your lives extraordinary.');
  let noteController = new NoteController(noteList);

  let obj = {
    innerHTML: ''
  };
  noteController.insertHTML(obj);
  assert.isTrue(obj.innerHTML === 
    '<ul><li><a href="#notes/0">Carpe diem. Seize th...</a></li></ul>');
}
testInsertHTML();

function testDisplayNotes() {
  let testList = new NoteList();
  testList.addNew('Hope is a good thing, maybe the best of things, and no good thing ever dies.');
  testList.addNew('After all, tomorrow is another day!');
  testList.addNew('Is life always this hard, or is it just when you\'re a kid?');
  
  let testController = new NoteController(testList);
  testController.insertHTML(document.getElementById('notes'));
}
testDisplayNotes();