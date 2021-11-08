import {
  SET_BANKS,
  SET_SELECTED_BANK,
  SET_BANK_MODAL_VISIBLE,
} from "redux/constants/commons/Banks";

const initState = {
  bankList: { Data: [] },
  bankModalVisible: false,
  selectedBank: {},
};
const banks = (state = initState, action) => {
  switch (action.type) {
    case SET_BANKS:
      return {
        ...state,
        bankList: action.bankList,
      };
    case SET_BANK_MODAL_VISIBLE:
      return {
        ...state,
        bankModalVisible: action.bankModalVisible,
      };
    case SET_SELECTED_BANK:
      return {
        ...state,
        selectedBank: action.selectedBank,
      };
    default:
      return state;
  }
};

export default banks;
