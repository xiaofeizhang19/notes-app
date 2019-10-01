(function(exports) {
  function testNoteController() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);

    noteController.insertIntoPage();

    if (noteList.allNotes()[0] !== "Favourite drink: seltzer") {
      throw new Error("List does not include new note added");
    }

    if (document.getElementById('notes').innerHTML !==
      "<ul><li><div>Favourite drink: seltzer</div></li></ul>") {
      throw new Error("Content not added to web page");
    }
  }
  testNoteController();
})(this);