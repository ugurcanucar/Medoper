import {
  SET_COPY_TAXOFFICES,
  SET_EDITABLE_TAXOFFICE,
  SET_SELECTED_TAXOFFICES,
  SET_TAXOFFICE_MODAL_VISIBLE,
  SET_TAX_OFFICES,
} from "redux/constants/commons/tax-offices";

const initState = {
  taxOffices: { Data: [] },
  taxOfficeModalVisible: false,
  selectedTaxOffices: [],
  editableTaxOffice: {},
  copyTaxOffice: [],
};
const document = (state = initState, action) => {
  switch (action.type) {
    case SET_TAX_OFFICES:
      return {
        ...state,
        taxOffices: action.taxOffices,
      };

    case SET_TAXOFFICE_MODAL_VISIBLE:
      return {
        ...state,
        taxOfficeModalVisible: action.taxOfficeModalVisible,
      };
    case SET_SELECTED_TAXOFFICES:
      return {
        ...state,
        selectedTaxOffices: action.selectedTaxOffices,
      };
    case SET_COPY_TAXOFFICES:
      return {
        ...state,
        copyTaxOffice: action.copyTaxOffice,
      };
    case SET_EDITABLE_TAXOFFICE:
      return {
        ...state,
        editableTaxOffice: action.editableTaxOffice,
      };

    default:
      return state;
  }
};

export default document;
