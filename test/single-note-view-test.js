function testSingleNoteView() {
  let note = new Note(0, "Ciao")
  let singleNoteView = new SingleNoteView(note);

  assert.isTrue(singleNoteView.returnNoteHTML() === "<div>Ciao</div>");
};
testSingleNoteView();