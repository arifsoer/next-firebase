"use client";

import { FC, ReactNode } from "react";
import { Modal } from "react-bootstrap";

export type TModalProps = {
  isOpen: boolean;
  onChangeOpen: (newOpen: boolean) => void;
  body?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  isShowCloseButton?: boolean;
};

const ModalComponent: FC<TModalProps> = ({
  isOpen,
  onChangeOpen,
  body,
  footer,
  header,
  isShowCloseButton = true,
}) => {
  return (
    <Modal show={isOpen} onHide={() => onChangeOpen(false)} size="lg">
      <Modal.Header closeButton={isShowCloseButton}>{header}</Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
