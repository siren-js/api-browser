import React from 'react';

export const ModalCard = (props: ModalCardProps) => (
  <div className={`modal${props.active ? ' is-active' : ''}`}>
    <div className="modal-background" onClick={props.onClose}></div>
    <div className="modal-card has-text-dark">
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
  </div>
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
