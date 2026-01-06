interface Button {
  id: string;
  label: string;
  style: string;
}

interface ModalConfig {
  title: string;
  message: string;
  stats?: string;
  buttons?: Button[];
}

export function renderModal({
  title,
  message,
  stats = "",
  buttons = [],
}: ModalConfig): string {
  return `
    <div class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2>${title}</h2>
        </div>
        <div class="modal-body">
          <p>${message}</p>
          ${stats}
        </div>
        <div class="modal-footer">
          ${buttons
            .map(
              (btn) =>
                `<button id="${btn.id}" class="btn-${btn.style}">${btn.label}</button>`
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}
