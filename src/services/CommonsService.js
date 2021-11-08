import api from "./ApiService";

const commonsService = {};

commonsService.taxOffices = {
  get: async () => {
    if (!sessionStorage.getItem("taxOffices")) {
      const response = await api.get("taxoffice");
      if (response.data.Success) {
        sessionStorage.setItem(
          "taxOffices",
          JSON.stringify(response.data.Data)
        );
      }
    }
    return JSON.parse(sessionStorage.getItem("taxOffices"));
  },
  getById: async (id) => {
    if (id === 0) return {};
    var data = await commonsService.taxOffices.get();
    return data.find((x) => x.Id === id);
  },
  getByCityId: async (cityId) => {
    var data = await commonsService.taxOffices.get();
    return data.filter((x) => x.CityId === cityId);
  },
};

commonsService.banks = {
  get: async () => {
    if (!sessionStorage.getItem("banks")) {
      const response = await api.get("bank");
      if (response.data.Success) {
        sessionStorage.setItem("banks", JSON.stringify(response.data.Data));
      }
    }
    return JSON.parse(sessionStorage.getItem("banks"));
  },
  getById: async (id) => {
    return await commonsService.banks.get().find((x) => x.Id === id);
  },
  getByIbanCode: async (ibanCode) => {
    var data = await commonsService.banks.get();
    return data?.find((x) => x.IbanCode === ibanCode);
  },
};

commonsService.city = {
  get: async () => {
    if (!sessionStorage.getItem("cityDistricts")) {
      const response = await api.get("City/districts");
      if (response.data.Success) {
        sessionStorage.setItem(
          "cityDistricts",
          JSON.stringify(response.data.Data)
        );
      }
    }
    return JSON.parse(sessionStorage.getItem("cityDistricts"));
  },
};

export default commonsService;
