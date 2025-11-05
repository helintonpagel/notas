const noteForm = document.getElementById("note-form");
const deleteButton = document.getElementById("delete-button");

function getNoteFromId(id) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  return notes.find((note) => note.id === id);
}

function populateNoteForm(note) {
  if (!note) alert("Anotação não encontrada!") || window.location.replace("index.html");

  noteForm.elements["note-title"].value = note.title;
  noteForm.elements["note-content"].value = note.content;
}

populateNoteForm(getNoteFromId(new URLSearchParams(window.location.search).get("id")));

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const noteIndex = notes.findIndex((note) => note.id === new URLSearchParams(window.location.search).get("id"));

  if (noteIndex === -1) alert("Anotação não encontrada!") || window.location.replace("index.html");

  notes[noteIndex].title = noteForm.elements["note-title"].value;
  notes[noteIndex].content = noteForm.elements["note-content"].value;
  notes[noteIndex].updatedAt = new Date().toISOString();

  localStorage.setItem("notes", JSON.stringify(notes));
  window.location.replace("index.html");
});

deleteButton.addEventListener("click", () => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const noteIndex = notes.findIndex((note) => note.id === new URLSearchParams(window.location.search).get("id"));

  if (noteIndex === -1) alert("Anotação não encontrada!") || window.location.replace("index.html");
  if (!confirm("Tem certeza que deseja deletar esta anotação?")) return;

  notes.splice(noteIndex, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  window.location.href("index.html");
});
