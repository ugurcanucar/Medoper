import {
  SET_SELLER_CONTACTS,
  SET_SELLERS,
  SET_SELLER_CONTACT_MODAL_VISIBLE,
  SET_SELLER_ADRESS,
} from "redux/constants/sellers";

const initialState = {
  sellerList: { Data: [] },
  sellerContacts: { Data: [] },
  sellerContactModalVisible: false,
  sellerAdress: { Data: [] },
};

const seller = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELLERS:
      return {
        ...state,
        sellerList: action.sellerList,
      };
    case SET_SELLER_CONTACTS:
      return {
        ...state,
        sellerContacts: action.sellerContacts,
      };
    case SET_SELLER_CONTACT_MODAL_VISIBLE:
      return {
        ...state,
        sellerContactModalVisible: action.sellerContactModalVisible,
      };
    case SET_SELLER_ADRESS:
      return {
        ...state,
        sellerAdress: action.sellerAdress,
      };
    default:
      return state;
  }
};

export default seller;
