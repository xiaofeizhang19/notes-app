function testNoteController() {
  let noteList = new NoteList();
  noteList.addNew("Carpe diem. Seize the day, boys. Make your lives extraordinary.");
  let noteController = new NoteController(noteList);

  let obj = document.getElementById('notes');
  noteController.insertHTML(obj);
  assert.isTrue(obj.innerHTML === 
    '<ul><li><a href="#notes/0">Carpe diem. Seize th</a></li></ul>');
}
testNoteController();