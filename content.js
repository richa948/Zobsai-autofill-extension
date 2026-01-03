chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "autofill") {
    autofillForm();
  }
});

function autofillForm() {
  const name = "harry Potter";
  const email = "harrypotter00@gmail.com";
  const phone = "9876543210";
  const skills = "Java, HTML, CSS, JavaScript (Beginner)";

  const inputs = document.querySelectorAll("input");
  const textareas = document.querySelectorAll("textarea");

  inputs.forEach((input) => {
    const fieldName = input.name.toLowerCase();
    const placeholder = (input.placeholder || "").toLowerCase();

    if (fieldName.includes("name") || placeholder.includes("name")) {
      input.value = name;
    }

    if (fieldName.includes("email") || placeholder.includes("email")) {
      input.value = email;
    }

    if (fieldName.includes("phone") || placeholder.includes("phone")) {
      input.value = phone;
    }
  });

  textareas.forEach((textarea) => {
    textarea.value = skills;
  });
}
