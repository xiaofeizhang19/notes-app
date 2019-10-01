(function(exports) {
  function testNoteListHTML() {
    var noteList = new NoteList();
    noteList.addNew("Bonjour");
    var noteListView = new NoteListView(noteList);
    if (noteListView.returnHTMLString() !== "<ul><li><div>Bonjour</div></li></ul>") {
      throw new Error("HTML string not found")
    }
  };

  testNoteListHTML();
})(this);