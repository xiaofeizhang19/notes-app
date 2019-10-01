(function(exports) {
  function testNoteModel() {
    var note = new Note("test note");
    if (note.newNote() !== "test note") {
      throw new Error("New note not equal to note added")
    }
  };
  testNoteModel();
})(this);