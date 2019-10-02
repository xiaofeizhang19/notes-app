function testNoteModel() {
  var note = new Note(0, "test note");
  assert.isTrue(note.returnText() === "test note");
};
testNoteModel();