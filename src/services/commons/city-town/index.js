import api from "services/ApiService";

const cityTownService = {
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
  getDistricts: async () => {
    return api
      .get(`District`)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postCity: async (data) => {
    return api
      .post(`City`, data)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  postDistrict: async (data) => {
    return api
      .post(`District`, data)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  updateCity: async (data) => {
    return api
      .put(`City`, data)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          console.log("Şehirler Güncellendi.", d);
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  updateDistrict: async (data) => {
    return api
      .put(`District`, data)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          console.log("İlçeler Güncellendi.", d);
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },

  deleteCity: async (id) => {
    return api.delete(`City/${id}`).then((d) => {
      if (d.status === 200 && d.data.Success) {
        console.log("Şehir Silindi.", d);
      }
    });
  },

  deleteDistrict: async (id) => {
    return api.delete(`District/${id}`).then((d) => {
      if (d.status === 200 && d.data.Success) {
        console.log("İlçe Silindi.", d);
      }
    });
  },
};

export default cityTownService;
