const tbody = document.querySelector("#tbody");

(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => dataRender(data))
        .catch(err => console.err(err));
})()

function dataRender(data) {
    tbody.innerHTML = '';
    for (d of data) {
        tbody.innerHTML += `<tr  class="text-center">
        <td class="fw-bold">${d.id}</td>
        <td>${d.title}</td>
        <td><input class="form-check-input" type="checkbox" ${d.completed ? 'checked' : ''}></td>
        </tr>`
    }

}