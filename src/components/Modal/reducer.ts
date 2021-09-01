// Здесь хоть и используется редьюсер отдельно для Модального компонента, но в больших сайтах, создается специальный редьюсер для уведомлений, модальный окон и снэкбаров.

import { CLOSE_MODAL, modalActionsTypes, OPEN_MODAL } from "./actions";
import { ModalInitialState } from "./interface";

const initialState: ModalInitialState = {
  isOpen: false,
};

export const modalReducer = (
  state: ModalInitialState = initialState,
  action: modalActionsTypes
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};
