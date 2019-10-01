const greeting = "Howdy";

document.getElementById('app').innerHTML = greeting;

(function(exports) {
  function NoteController(noteList) {
    noteList.addNew("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.insertIntoPage = function() {
    var HTMLString = this.noteListView.returnHTMLString();
    document.getElementById('notes').innerHTML = HTMLString;
  }

  exports.NoteController = NoteController;
})(this);