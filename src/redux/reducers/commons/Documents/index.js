import {
  SET_DOCUMENTS,
  SET_DOCUMENT_MODAL_VISIBLE,
  SET_DOCUMENTS_ROW,
} from "redux/constants/commons/Documents";

const initState = {
  documents: { Data: [] },
  documentModalVisible: false,
  documentsRow: {},
};
const document = (state = initState, action) => {
  switch (action.type) {
    case SET_DOCUMENTS:
      return {
        ...state,
        documents: action.documents,
      };
    case SET_DOCUMENT_MODAL_VISIBLE:
      return {
        ...state,
        documentModalVisible: action.documentModalVisible,
      };
    case SET_DOCUMENTS_ROW:
      return {
        ...state,
        documentsRow: action.documentsRow,
      };
    default:
      return state;
  }
};

export default document;
