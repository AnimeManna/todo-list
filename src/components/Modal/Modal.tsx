import React from "react";
import styles from "./Modal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootReducerState } from "../../rootReducer";
import { closeModal } from "./actions";

export const Modal: React.FC = (props) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootReducerState) => state.modalReducer.isOpen
  );

  const onClose = () => {
    dispatch(closeModal());
  };

  if (isOpen)
    return (
      <div className={styles.container}>
        <div className={styles.blur} onClick={onClose} />
        <div className={styles.component}>{props.children}</div>
      </div>
    );

  return null;
};
