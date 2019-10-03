function testSingleNoteListHTML() {
  var noteList = new NoteList();
  noteList.addNew('After all, tomorrow is another day!');
  var noteListView = new NoteListView(noteList);
  
  assert.isTrue(noteListView.returnHTMLString() ===
  '<ul><li><a href="#notes/0">After all, tomorrow </a></li></ul>');
};
testSingleNoteListHTML();

function testMultiNoteListHTML() {
  var noteList = new NoteList();
  noteList.addNew(
    'Hope is a good thing, maybe the best of things, and no good thing ever dies.'
  );
  noteList.addNew('Is life always this hard, or is it just when you\'re a kid?');
  var noteListView = new NoteListView(noteList);
  
  assert.isTrue(noteListView.returnHTMLString() ===
    '<ul><li><a href="#notes/0">Hope is a good thing</a></li><li><a href="#notes/1">Is life always this </a></li></ul>');
};
testMultiNoteListHTML();
