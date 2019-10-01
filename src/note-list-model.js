(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.allNotes = function() {
    return this.notes;
  };

  NoteList.prototype.addNew = function(text) {
    this.notes.push(text);
  }

  exports.NoteList = NoteList;
})(this);
