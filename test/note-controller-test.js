function testNoteController() {
  let noteList = new NoteList();
  noteList.addNew("Favourite drink: seltzer");
  let noteController = new NoteController(noteList);

  let obj = document.getElementById('notes');
  noteController.insertHTML(obj);
  assert.isTrue(obj.innerHTML === 
    "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
}
testNoteController();