import api from "services/ApiService";

const bankService = {
  getBanks: async () => {
    return api
      .get(`Bank`)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postBank: async (data) => {
    return api
      .post(`Bank`, data)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateBank: async (data) => {
    return api
      .put(`Bank`, data)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          console.log("Banka Güncellendi.", d);
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteBank: async (id) => {
    return api.delete(`Bank/${id}`).then((d) => {
      if (d.status === 200 && d.data.Success) {
        console.log("Banka Silindi.", d);
      }
    });
  },
};
export default bankService;
