import api from "services/ApiService";

const sellerService = {
  getSellers: async () => {
    return api
      .get(`Seller`)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  updateSeller: async (data) => {
    return api
      .put(`Seller`, data)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          console.log("Satıcı Güncellendi.", d);
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteSeller: async (id) => {
    return api.delete(`Seller/${id}`).then((d) => {
      if (d.status === 200 && d.data.Success) {
        console.log("Satıcı Silindi.", d);
      }
    });
  },
};
export default sellerService;
