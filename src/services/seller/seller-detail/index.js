import api from "services/ApiService";

const sellerDetailService = {};

sellerDetailService.banks = {
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
    return await sellerDetailService.banks.get().find((x) => x.Id === id);
  },
  getByIbanCode: async (ibanCode) => {
    var data = await sellerDetailService.banks.get();
    return data?.find((x) => x.IbanCode === ibanCode);
  },
};

sellerDetailService.contact = {
  getContact: async () => {
    return api
      .get(`SellerContact`)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

sellerDetailService.adress = {
  getAdress: async (Id) => {
    return api
      .get(`SellerAddress`)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          return d;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getAdressbyId: async (Id) => {
    return api
      .get(`SellerAddress`)
      .then((d) => {
        if (d.status === 200 && d.data.Success) {
          const newData = { Data: [] };
          newData.Data = d.data.Data.filter((x) => x.SellerId === parseInt(Id));
          return newData;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
export default sellerDetailService;
