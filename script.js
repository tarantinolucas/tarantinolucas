const $form = document.querySelector("#form");
const $buttonSubmit = document.querySelector("#buttonSubmit");

$form.addEventListener("submit", submitManual);

function submitManual(event) {
  event.preventDefault();
  const form = new FormData(this);  
  $buttonSubmit.setAttribute(
    "href",
    `mailto:info@eym.com.ar?subject=${form.get("name")} ${form.get(
      "email"
    )} ${form.get("phone")} ${form.get("tipo-de-contacto")}&body=${form.get(
      "message"
    )}`
  );
  $buttonSubmit.click();
}
