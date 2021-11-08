import {
  SET_BANKS,
  SET_BANK_MODAL_VISIBLE,
  SET_SELECTED_BANK,
} from "redux/constants/commons/Banks";

export const setBanks = (bankList) => {
  return {
    type: SET_BANKS,
    bankList,
  };
};

export const setBankModalVisible = (bankModalVisible) => {
  return {
    type: SET_BANK_MODAL_VISIBLE,
    bankModalVisible,
  };
};
export const setSelectedBank = (selectedBank) => {
  return {
    type: SET_SELECTED_BANK,
    selectedBank,
  };
};
