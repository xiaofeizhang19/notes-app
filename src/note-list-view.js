(function(exports) {
    function NoteListView(NoteList) {
        this.NoteList = NoteList;
    };

    NoteListView.prototype.returnHTMLString = function() {
        const newArray = this.NoteList.notes.map(function(element) {
            return `<li><div>${element}</div></li>`;
        }) 
        const newString = newArray.join('');
        return '<ul>' + newString + '</ul>';
    };

    exports.NoteListView = NoteListView;
})(this);