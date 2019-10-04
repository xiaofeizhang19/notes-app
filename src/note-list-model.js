(function(exports) {
  function NoteList() {
    this.notes = [];
    this.noteId = 0;
    this.notesIndex = {};
  };

  NoteList.prototype.allNotes = function() {
    return this.notes;
  };

  NoteList.prototype.addNew = function(text) {
    let note = new Note(this.noteId, text)
    this.notes.push(note);
    this.notesIndex[this.noteId] = note;
    this.noteId++;
  }

  NoteList.prototype.noteById = function(id) {
    return this.notesIndex[id];
  }

  exports.NoteList = NoteList;
})(this);
