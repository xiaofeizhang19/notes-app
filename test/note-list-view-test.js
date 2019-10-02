function testSingleNoteListHTML() {
  var noteList = new NoteList();
  noteList.addNew("Bonjour");
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHTMLString() === "<ul><li><div>Bonjour</div></li></ul>");
};
testSingleNoteListHTML();

function testMultiNoteListHTML() {
  var noteList = new NoteList();
  noteList.addNew("Bonjour");
  noteList.addNew("Hola");
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHTMLString() === 
    "<ul><li><div>Bonjour</div></li><li><div>Hola</div></li></ul>");
  };
testMultiNoteListHTML();
