import Component from '../component';
// import { qs, qsAll } from '../../helper';
import './phoneForm.scss';

import phoneModal from './phoneForm.template';

class PhoneForm extends Component {
  constructor() {
    super();
    this.accordeons = [];
  }

  init() {
    this.events.addEventList('openedContactFormModal', [this.addToDomModalForm.bind(this)]);
    this.events.addEventList('closedContactFormModal', [this.remooveModalFormFromDom.bind(this)]);
  }

  render() {
    this.modalForm = phoneModal.render();
  }

  addToDomModalForm() {
    document.body.appendChild(this.modalForm);
  }

  remooveModalFormFromDom() {
    this.modalForm.remove();
    this.modalForm = phoneModal.render();
  }
}
export default PhoneForm;
