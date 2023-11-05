import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tasks"
export default class extends Controller {

  toggle(e){
    const id = e.target.dataset.id
    const csrfToken = document.querySelector("[name='csrf-token']").content

    fetch(`/tasks/${id}/toggle`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({ completed: e.target.checked })
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message)
      })
  }
}
