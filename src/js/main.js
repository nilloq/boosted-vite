import { Modal } from "boosted";

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});

const modal = document.getElementById("exampleModal");
new Modal(modal);
