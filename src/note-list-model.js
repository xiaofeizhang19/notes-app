(function(exports) {
  function NoteList() {
    this._notes = [];
  };

  NoteList.prototype.allNotes = function() {
    return this._notes;
  };

  NoteList.prototype.addNew = function(text) {
    this._notes.push(text);
  }

  exports.NoteList = NoteList;
})(this);
