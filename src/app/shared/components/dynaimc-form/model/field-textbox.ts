import {FieldBase} from "./field-base";

export class TextboxField extends FieldBase<string> {
  controlType = "textbox";
  type: string;   // text,email,url

  constructor(options = {}) {
    super(options);
    this.type = options["type"] || "";
  }
}
