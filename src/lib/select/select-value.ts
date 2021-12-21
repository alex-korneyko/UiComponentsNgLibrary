export class SelectValue {

  text: string;
  prompt = "";
  disabled = false;

  constructor(text: string, disabled = false) {

    this.text = text;
    this.disabled = disabled;
  }

  AddPrompt(prompt: string): SelectValue {
    this.prompt = prompt;
    return this;
  }
}
