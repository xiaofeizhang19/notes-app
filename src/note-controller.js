(function(exports) {
  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.insertHTML = function(obj) {
    let HTMLString = this.noteListView.returnHTMLString();
    obj.innerHTML = HTMLString;
  }

  exports.NoteController = NoteController;
})(this);