import {Injectable} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FieldBase} from "./model/field-base";


@Injectable()
export class QuestionControlService {
  constructor() {
  }

  // transforming questions to a FormGroup
  toFormGroup(questions: FieldBase<any>[]) {
    const group: any = {};
    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || "", Validators.required) : new FormControl(question.value || "");
    });
    return new FormGroup(group);
  }

  addFormControl(questions: FieldBase<any>[]) {
    const group = [];
    let control;
    questions.forEach(question => {
      if (question.required) {
        control = new FormControl(question.value || "", Validators.required);
      } else {
        control = new FormControl(question.value || "");
      }
      control.name = question.key;
      group.push(control);
    });
    return group;
  }
}
