(function(exports) {
    function NoteListView(noteList) {
        this.noteList = noteList;
    };

    NoteListView.prototype.returnHTMLString = function() {
        const newArray = this.noteList.allNotes().map(function(element) {
            return `<li><div>${element}</div></li>`;
        }) 
        const newString = newArray.join('');
        return '<ul>' + newString + '</ul>';
    };

    exports.NoteListView = NoteListView;
})(this);