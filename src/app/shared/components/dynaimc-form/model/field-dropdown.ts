import {FieldBase} from "./field-base";

export class DropdownField extends FieldBase<string> {
  controlType = "dropdown";   // select box
  options: { key: string, value: string }[] = [];

  linkages: Array<any>; // 联动组件
  addControls: Array<any>;

  constructor(options: {} = {}) {
    super(options);
    this.options = options["options"] || [];
    this.linkages = options["linkages"];
    this.addControls = options["addControls"];
  }
}
