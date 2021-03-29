export const addBtn = document.querySelector(".addBtn") as HTMLButtonElement;
export const list = document.querySelector("ul") as HTMLUListElement;
export const myTodoInput = document.querySelector(
  "#myInput"
) as HTMLInputElement;

export function addCloseButtons() {
  // Create a "close" button and append it to each list item
  const allListElements = document.getElementsByTagName("LI");
  for (const listElement of allListElements) {
    const closeButtonWrapper = document.createElement("SPAN");
    const closeButtonCharacter = document.createTextNode("\u00D7");
    closeButtonWrapper.className = "close";
    closeButtonWrapper.appendChild(closeButtonCharacter);
    listElement.appendChild(closeButtonWrapper);
  }
  const close = document.querySelectorAll(
    ".close"
  ) as NodeListOf<HTMLSpanElement>;
  // Click on a close button to hide the current list item
  for (const closeButton of close) {
    closeButton.onclick = function (e: UIEvent) {
      const listElement = e.target as HTMLElement;
      listElement.closest("li")?.remove();
    };
  }
}

export function addCloseButton(todoListElement: HTMLLIElement) {
  const closeButtonWrapper = document.createElement("SPAN");
  const closeButtonCharacter = document.createTextNode("\u00D7");
  closeButtonWrapper.className = "close";
  closeButtonWrapper.appendChild(closeButtonCharacter);
  todoListElement.appendChild(closeButtonWrapper);
  const closeButton = todoListElement.querySelector(
    ".close"
  ) as HTMLSpanElement;
  // Click on a close button to hide the current list item
  closeButton.onclick = function (e: UIEvent) {
    const listElement = e.target as HTMLElement;
    listElement.closest("li")?.remove();
  };
}
