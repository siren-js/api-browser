import {
  ModalCard,
  ModalCardBody,
  ModalCardFoot,
  ModalProps
} from '../util';
import HeadersSetting from './HeadersSetting';
import TitleCasePropertyNamesSetting from './TitleCasePropertyNamesSetting';

export default function SettingsModal(props: ModalProps) {
  return (
    <ModalCard {...props} title="Settings">
      <ModalCardBody>
        <TitleCasePropertyNamesSetting />
        <hr />
        <HeadersSetting />
      </ModalCardBody>
      <ModalCardFoot />
    </ModalCard>
  );
}
