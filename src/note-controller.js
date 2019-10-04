(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.registerListeners = function() {
    window.addEventListener(
      "hashchange", this.handleHashChange.bind(this)
    );
    
    let noteEntryForm = document.getElementById("text");
    noteEntryForm.addEventListener(
      "submit", this.handleSubmit.bind(this)
    );
  }

  NoteController.prototype.handleHashChange = function(event) {
    let id = window.location.hash.split('/')[1];
    let note = this.noteList.noteById(id);
    document
      .getElementById("full-note")
      .innerHTML = note.returnText();
  }

  NoteController.prototype.handleSubmit = function(event) {
    event.preventDefault();
    
    let text = document.getElementById("note-entry").value;
    this.noteList.addNew(text);
    let notes = document.getElementById("notes");
    this.insertHTML(notes);

    document.getElementById("note-entry").value = "";
  }

  NoteController.prototype.insertHTML = function(obj) {
    let HTMLString = this.noteListView.returnHTMLString();
    obj.innerHTML = HTMLString;
  };

  exports.NoteController = NoteController;
})(this);

const ctrl = new NoteController(new NoteList());
ctrl.registerListeners();