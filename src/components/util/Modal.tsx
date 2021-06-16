import React from 'react';

const ModalContainer = (props: ModalProps) => (
  <div className={`modal${props.active ? ' is-active' : ''}`}>
    <div className="modal-background" onClick={props.onClose}></div>
    {props.children}
  </div>
);

export const Modal = (props: ModalProps) => (
  <ModalContainer {...props}>
    <div className="modal-content">{props.children}</div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={props.onClose}
    ></button>
  </ModalContainer>
);

export const ModalCard = (props: ModalCardProps) => (
  <ModalContainer {...props}>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{props.title}</p>
        <button
          className="delete"
          aria-label="close"
          onClick={props.onClose}
        ></button>
      </header>
      {props.children}
    </div>
  </ModalContainer>
);

export interface ModalProps {
  active: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}

export interface ModalCardProps extends ModalProps {
  title: string;
}

export const ModalCardBody = (props: ModalCardBodyProps) => (
  <section className="modal-card-body">{props.children}</section>
);

export interface ModalCardBodyProps {
  children: React.ReactNode;
}

export const ModalCardFoot = (props: ModalCardFooterProps) => (
  <footer className="modal-card-foot">{props.children}</footer>
);

export interface ModalCardFooterProps {
  children?: React.ReactNode;
}
