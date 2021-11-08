import {
  SET_DOCUMENTS,
  SET_DOCUMENTS_ROW,
  SET_DOCUMENT_MODAL_VISIBLE,
} from "redux/constants/commons/Documents";

export const setDocuments = (documents) => {
  return {
    type: SET_DOCUMENTS,
    documents,
  };
};

export const setDocumentModalVisible = (documentModalVisible) => {
  return {
    type: SET_DOCUMENT_MODAL_VISIBLE,
    documentModalVisible,
  };
};
export const setDocumentsRow = (documentsRow) => {
  return {
    type: SET_DOCUMENTS_ROW,
    documentsRow,
  };
};
