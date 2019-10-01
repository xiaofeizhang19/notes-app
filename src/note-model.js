(function(exports) {
  function Note(text) {
    this._note = text;
  };

  Note.prototype.newNote = function() {
    return this._note;
  };

  exports.Note = Note;
})(this);