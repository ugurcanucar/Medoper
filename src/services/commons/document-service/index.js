import api from "services/ApiService";

const documentService = {
  getDocuments: async () => {
    return api
      .get(`DocumentType`)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postDocuments: async (data) => {
    return api
      .post(`DocumentType`, data)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateDocument: async (data) => {
    return api
      .put(`DocumentType`, data)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          console.log("Döküman Güncellendi.", d);
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteDocument: async (id) => {
    return api.delete(`DocumentType/${id}`).then((d) => {
      if (d.status === 200 && d.data.Success) {
        console.log("Döküman Silindi.", d);
      }
    });
  },
};
export default documentService;
