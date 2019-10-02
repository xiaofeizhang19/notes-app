testAddNewNote = function() {
  var noteList = new NoteList();
  noteList.addNew("Text 1");
  assert.isTrue(noteList.allNotes().length === 1);
  assert.isTrue(noteList.allNotes()[0].returnText() === "Text 1");
};
testAddNewNote();

testAddMultiNotes = function() {
  var noteList = new NoteList();
  noteList.addNew("Text 1");
  noteList.addNew("Text 2");
  assert.isTrue(noteList.allNotes().length === 2);
  assert.isTrue(noteList.allNotes()[0].returnText() === "Text 1");
  assert.isTrue(noteList.allNotes()[1].returnText() === "Text 2");
};
testAddMultiNotes();