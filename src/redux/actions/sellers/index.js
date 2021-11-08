import {
  SET_SELLER_CONTACTS,
  SET_SELLER_CONTACT_MODAL_VISIBLE,
  SET_SELLERS,
  SET_SELLER_ADRESS,
} from "redux/constants/sellers";
export const setSellers = (sellerList) => ({
  type: SET_SELLERS,
  sellerList,
});
export const setSellerContacts = (sellerContacts) => ({
  type: SET_SELLER_CONTACTS,
  sellerContacts,
});
export const setSellerContactModalVisible = (sellerContactModalVisible) => ({
  type: SET_SELLER_CONTACT_MODAL_VISIBLE,
  sellerContactModalVisible,
});
export const setSellerAdress = (sellerAdress) => ({
  type: SET_SELLER_ADRESS,
  sellerAdress,
});
