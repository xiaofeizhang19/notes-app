(function(exports) {
  function testNoteListModel() {
    var noteList = new NoteList();

    if (noteList.allNotes().length !== 0 || noteList.allNotes() === undefined){
      throw new Error("List is not an empty array")
    }

    noteList.addNew("hello world");
    if (noteList.allNotes().length !== 1) {
      throw new Error("List does not have one note")
    }
    if (noteList.allNotes()[0] !== "hello world") {
      throw new Error("List does not include the new note")
    }
};

testNoteListModel();
})(this);
