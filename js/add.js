document.getElementById("note-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const title = event.target.elements["note-title"].value;
  const content = event.target.elements["note-content"].value;

  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const newNote = {
    id: Date.now().toString(),
    title: title,
    content: content,
  };

  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));

  window.location.href = "index.html";
});