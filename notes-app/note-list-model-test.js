(function(exports) {
  function testNoteListModel() {
  var noteList = new NoteList();

  if (noteList.allNotes.length !== 0 || noteList.allNotes === undefined){
    throw new Error("List is not an empty array")
  }
};

testNoteListModel();
})(this);
