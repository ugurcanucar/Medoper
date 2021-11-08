import api from "services/ApiService";

const taxOfficesService = {
  getCities: async () => {
    return api
      .get(`City`)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getTaxOffices: async () => {
    return api
      .get(`TaxOffice`)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postTaxOffice: async (data) => {
    return api
      .post(`TaxOffice`, data)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  updateTaxOffice: async (data) => {
    return api
      .put(`TaxOffice`, data)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          console.log("Vergi Dairesi Güncellendi.", d);
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteTaxOffice: async (id) => {
    return api.delete(`TaxOffice/${id}`).then((d) => {
      console.log(d);
      if (d.status === 200 && d.data.Success) {
        console.log("Vergi Dairesi Silindi.", d);
      }
    });
  },
};

export default taxOfficesService;
