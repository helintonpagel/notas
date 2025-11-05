const notesList = document.getElementById("notes-list");
const noteTemplate = document.getElementById("note-template");

function createNoteElement(note) {
  const noteElement = noteTemplate.content.cloneNode(true);

  noteElement.querySelector("a").href = `view.html?id=${note.id}`;
  noteElement.querySelector("h3").textContent = note.title;
  noteElement.querySelector("p").textContent = note.content;

  return noteElement;
}

function renderNotes(notes) {
  const fragment = document.createDocumentFragment();

  notes.forEach((note) => fragment.appendChild(createNoteElement(note)));
  notesList.innerHTML = "";
  notesList.appendChild(fragment);
}

renderNotes(JSON.parse(localStorage.getItem("notes")) || []);