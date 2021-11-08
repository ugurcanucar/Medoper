import {
  SET_TAX_OFFICES,
  SET_TAXOFFICE_MODAL_VISIBLE,
  SET_SELECTED_TAXOFFICES,
  SET_EDITABLE_TAXOFFICE,
  SET_COPY_TAXOFFICES,
} from "redux/constants/commons/tax-offices";

export const setTaxOffices = (taxOffices) => ({
  type: SET_TAX_OFFICES,
  taxOffices,
});

export const setTaxModalVisible = (taxOfficeModalVisible) => ({
  type: SET_TAXOFFICE_MODAL_VISIBLE,
  taxOfficeModalVisible,
});
export const setSelectedTaxOffices = (selectedTaxOffices) => {
  return {
    type: SET_SELECTED_TAXOFFICES,
    selectedTaxOffices,
  };
};
export const setCopySelectedOffice = (copyTaxOffice) => {
  return {
    type: SET_COPY_TAXOFFICES,
    copyTaxOffice,
  };
};
export const setEditableTaxOffice = (editableTaxOffice) => {
  return {
    type: SET_EDITABLE_TAXOFFICE,
    editableTaxOffice,
  };
};
