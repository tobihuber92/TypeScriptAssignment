import { myTodoInput, addBtn } from "./dom-utils";
const MAX_LENGTH = 30;

export function validateInput(inputValue: string): ValidatorObject {
  if (!inputValue.trim()) {
    return {
      isValid: false,
      message: "You most provide a text.",
    };
  }

  if (isInputTooLong(inputValue)) {
    return { isValid: false, message: "Your Todo is too long!" };
  }

  return { isValid: true };
}

function isInputTooLong(inputValue: string) {
  if (inputValue.length > MAX_LENGTH) {
    return true;
  }
  return false;
}

export function validateButton() {
  if (myTodoInput.value) {
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
}

interface ValidatorObject {
  isValid: boolean;
  message?: string;
}
