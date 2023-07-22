import { ParentComponent } from 'solid-js';

export enum MessageType {
  Primary = 'is-primary',
  Danger = 'is-danger',
  Warning = 'is-warning',
}

export const Message: ParentComponent<{ type?: MessageType; title: string }> = ({
  type = MessageType.Primary,
  title,
  children,
}) => (
  <section class={`message ${type}`}>
    <div class="message-header">{title}</div>
    <div class="message-body">{children}</div>
  </section>
);
