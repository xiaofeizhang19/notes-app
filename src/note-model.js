(function(exports) {
  function Note(id, text) {
    this.id = id,
    this.text = text
  };

  Note.prototype.returnText = function() {
    return this.text;
  };

  exports.Note = Note;
})(this);