(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.returnHTMLString = function() {
    const renderNotesArray = this.noteList.allNotes().map(function(element) {
      return `<li><div>${element.returnText().slice(0, 20)}</div></li>`;
    }) 
    const htmlString = renderNotesArray.join('');
      return '<ul>' + htmlString + '</ul>';
  };

  exports.NoteListView = NoteListView;
})(this);