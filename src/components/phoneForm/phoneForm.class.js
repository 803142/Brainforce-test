import Component from '../component';
// import { qs, qsAll } from '../../helper';
import './phoneForm.scss';

import phoneModal from './phoneForm.template';
import * as telInput from './lbr/input-tel.lbr';

class PhoneForm extends Component {
  constructor() {
    super();
    this.telInput = telInput;
    this.accordeons = [];
  }

  init(app) {
    this.app = app;
    this.events.addEventList('openedContactFormModal', [this.addToDomModalForm.bind(this)]);
    this.events.addEventList('closedContactFormModal', [this.remooveModalFormFromDom.bind(this)]);
    this.events.addEventList('typeContactFormModal', [this.typeToModalForm.bind(this)]);
    this.events.addEventList('focusinContactFormModal', [this.focusinModalForm.bind(this)]);
    this.events.addEventList('focusoutContactFormModal', [this.focusoutModalForm.bind(this)]);
    this.events.addEventList('clickedContactFormModal', [this.clickedModalForm.bind(this)]);
  }

  render() {
    this.modalForm = phoneModal.render();
  }

  addToDomModalForm() {
    this.app.appendChild(this.modalForm);
  }

  remooveModalFormFromDom() {
    this.modalForm.remove();
    this.modalForm = phoneModal.render();
  }

  typeToModalForm(key) {
    const input = document.activeElement;
    const [char] = key;
    const newValue = input.value.split('');
    // const { type, value } = input;
    const place = input.selectionStart;
    if (this.telInput.correctChar(char)) {
      newValue[place] = char;
      input.value = newValue.join('');
      input.selectionStart = place + 1;
    }
  }

  focusinModalForm() {
    const input = document.activeElement;
    const { placeholder } = input;
    const focusedValue = placeholder;

    input.value = focusedValue;
    this.telInput.placeToStart();
  }

  focusoutModalForm() {
    const input = document.activeElement;
    const { value } = input;
    console.log(value, this.i);
  }

  clickedModalForm() {
    const input = document.activeElement;
    if (!this.telInput.wrightPosition(input)) {
      this.telInput.placeToStart();
    }
  }
}
export default PhoneForm;
