export const OPEN_MODAL = "OPEN_MODAL" as const;
export const CLOSE_MODAL = "CLOSE_MODAL" as const;

export const openModal = () => {
  return { type: OPEN_MODAL, payload: true };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL, payload: false };
};

export type modalActionsTypes =
  | ReturnType<typeof openModal>
  | ReturnType<typeof closeModal>;
