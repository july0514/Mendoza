// Manejar el envío del formulario de comentarios
document.getElementById("comentarioForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto de envío del formulario

    // Obtener el nombre y el comentario del formulario
    var nombre = document.getElementById("nombre").value.trim();
    var comentario = document.getElementById("comentario").value.trim();

    // Verificar que los campos no estén vacíos
    if (nombre && comentario) {
        // Crear un nuevo elemento de lista para el comentario
        var nuevoComentario = document.createElement("li");

        // Agregar contenido al comentario
        nuevoComentario.innerHTML = `<strong>${nombre}</strong>: <p>${comentario}</p>`;

        // Añadir el comentario a la lista
        document.getElementById("listaComentarios").appendChild(nuevoComentario);

        // Limpiar los campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("comentario").value = "";
    } else {
        alert("Por favor, completa ambos campos.");
    }
});
