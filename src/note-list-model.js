(function(exports) {
  function NoteList() {
    this.notes = [];
    this.noteId = 0;
  };

  NoteList.prototype.allNotes = function() {
    return this.notes;
  };

  NoteList.prototype.addNew = function(text) {
    this.notes.push(new Note(this.noteId, text));
    this.noteId++;
  }

  exports.NoteList = NoteList;
})(this);
