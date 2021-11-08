import api from "./ApiService";
import moment from "moment";
import commonsService from "./CommonsService";

const sellerService = {
  login: async (user) => {
    sessionStorage.removeItem("seller");
    const seller = await api.get("Seller/" + user.SellerId);
    console.log(seller);
    if (seller.data.Success) {
      var model = seller.data.Data;
      model.User = user;
      sessionStorage.setItem("seller", JSON.stringify(model));
      sellerService.address.combineCity();
    }
  },
  get: () => {
    return JSON.parse(sessionStorage.getItem("seller"));
  },
  save: (seller) => {
    sessionStorage.setItem("seller", JSON.stringify(seller));
  },
  register: async (values) => {
    values.DistrictId = values.city[1];
    const createSeller = await api.post("Seller/register", values);
    return (
      createSeller.status === 200 &&
      createSeller.data.Success &&
      createSeller.data.Data
    );
  },
  updateStoreName: async (values) => {
    let seller = sellerService.get();
    let updatedModel = {
      id: seller.Id,
      storeName: values.storeName,
    };

    const updated = await api.put("seller/update/storename", updatedModel);
    if (updated.status === 200 && updated.data) {
      seller.StoreName = updatedModel.storeName;
      sellerService.save(seller);

      return true;
    }

    return false;
  },
  updateEmail: async (values) => {
    let seller = sellerService.get();
    let updatedModel = {
      id: seller.User.Id,
      Email: values.newEmail,
    };

    const updated = await api.put("user/update/email", updatedModel);
    if (updated.status === 200 && updated.data.Data) {
      seller.User.Email = updatedModel.Email;
      sellerService.save(seller);

      return true;
    }

    return false;
  },
  updatePhone: async (values) => {
    let seller = sellerService.get();
    let updatedModel = {
      id: seller.User.Id,
      Phone: values.phone,
    };

    const updated = await api.put("user/update/phone", updatedModel);
    if (updated.status === 200 && updated.data.Data) {
      seller.User.Phone = updatedModel.Phone;
      sellerService.save(seller);

      return true;
    }

    return false;
  },
  updatePassword: async (values) => {
    let seller = sellerService.get();
    let updatedModel = {
      id: seller.User.Id,
      CurrentPassword: values.currentPassword,
      Password: values.newPassword,
    };

    return await api.put("user/update/password", updatedModel);
  },
};

sellerService.address = {
  get: (id) => {
    return sellerService.get().SellerAddress.find((x) => x.Id === id);
  },
  getAll: () => {
    return sellerService.get().SellerAddress;
  },
  save: async (values) => {
    // localstoragedan okuduğumuz datayı filtreleyip, güncelliyoruz.
    let seller = sellerService.get();

    let updatedModel = {
      Id: values.id,
      SellerId: seller.Id,
      AddressType: values.addressType,
      Address: values.address,
      CityId: values.city[0],
      DistrictId: values.city[1],
      PostalCode: values.postalCode,
    };
    let updatedAddress = await api.put("sellerAddress", updatedModel);
    if (updatedAddress.status === 200) {
      var cities = await commonsService.city.get();
      let city = cities.find((a) => a.value === values.city[0]);
      let district = city.children.find((c) => c.value === values.city[1]);

      seller.SellerAddress.filter((x) => x.Id === values.id).forEach((x) => {
        x.Address = values.address;
        x.CityId = values.city[0];
        x.DistrictId = values.city[1];
        x.PostalCode = values.postalCode;
        x.CityName = city.label;
        x.DistrictName = district.label;
      });

      // Güncellenmiş datayı localstroge atıyoruz.
      sellerService.save(seller);
      return true;
    }
    return false;
  },
  combineCity: async () => {
    let seller = await sellerService.get();
    var cities = await commonsService.city.get();

    console.log("seller", seller);
    console.log(cities);

    // seller.SellerAddress.forEach((x) => {
    //   let city = cities.find((a) =>
    //     a.children.find((c) => c.value === x.DistrictId)
    //   );
    //   let district = city.children.find((c) => c.value === x.DistrictId);
    //   x.CityId = city.value;
    //   x.CityName = city.label;
    //   x.DistrictName = district.label;
    // });

    // Güncellenmiş datayı localstroge atıyoruz.
    sellerService.save(seller);
  },
};

sellerService.banks = {
  get: (id) => {
    return sellerService.get().SellerBanks.find((x) => x.Id === id);
  },
  getFirst: () => {
    return sellerService.get().SellerBanks[0] ?? {};
  },
  save: async (values) => {
    // localstoragedan okuduğumuz datayı filtreleyip, güncelliyoruz.
    let seller = sellerService.get();

    let model = {
      Id: values.id,
      SellerId: seller.Id,
      Iban: values.iban.replaceAll(" ", ""),
      BankId: values.bankId,
    };

    return await sellerService.banks.createOrUpdate(model, seller);
  },
  createOrUpdate: async (model, seller) => {
    if (model.Id === 0) {
      let createdBank = await api.post("sellerBank", model);
      if (createdBank.status === 200) {
        model.Id = createdBank.data.Id;
        seller.SellerBanks.push(model);
        // Güncellenmiş datayı localstroge atıyoruz.
        sellerService.save(seller);
        return true;
      }
      return false;
    } else {
      let updatedBank = await api.put("sellerBank", model);
      if (updatedBank.status === 200) {
        seller.SellerBanks.filter((x) => x.Id === model.Id).forEach((x) => {
          x.Iban = model.Iban;
          x.BankId = model.BankId;
        });

        // Güncellenmiş datayı localstroge atıyoruz.
        sellerService.save(seller);
        return true;
      }
      return false;
    }
  },
};

sellerService.contacts = {
  get: (id) => {
    return sellerService.get().SellerContacts.find((x) => x.Id === id);
  },
  getAll: () => {
    return sellerService.get().SellerContacts;
  },
  save: async (values) => {
    // localstoragedan okuduğumuz datayı filtreleyip, güncelliyoruz.
    let seller = sellerService.get();

    let updatedModel = {
      Id: values.id,
      SellerId: seller.Id,
      ContactType: values.contactType,
      Name: values.name,
      Email: values.email,
      Phone: values.phone.replaceAll(" ", ""),
      Description: values.description,
    };
    console.log(updatedModel);
    let updated = await api.put("sellerContact", updatedModel);

    if (updated.status === 200) {
      seller.SellerContacts.filter((x) => x.Id === values.id).forEach((x) => {
        x.Name = values.name;
        x.Email = values.email;
        x.Phone = values.phone.replaceAll(" ", "");
        x.Description = values.description;
      });

      // Güncellenmiş datayı localstroge atıyoruz.
      sellerService.save(seller);

      return true;
    }

    return false;
  },
};

sellerService.checks = {
  storeName: async (storeName, sellerId) =>
    await api.post(
      "seller/check/storename?StoreName=" + storeName + "&sellerId=" + sellerId
    ),
  glnNo: async (glnNo) => await api.post("seller/check/glnNo?glnNo=" + glnNo),
  tckn: async (tckn) => await api.post("seller/check/tckn?tckn=" + tckn),
  taxNo: async (taxNo) => await api.post("seller/check/taxNo?taxNo=" + taxNo),

  email: async (email) => await api.post("user/check/email?Email=" + email),
  phone: async (phone) => await api.post("user/check/phone?phone=" + phone),

  storenamelastUpdate: async () => {
    let SellerId = sellerService.get().Id;
    let response = await api.post(
      "seller/check/storenamelastUpdate?SellerId=" + SellerId
    );
    if (response.status === 200) {
      return moment(moment()).diff(response.data, "days");
    } else if (response.status === 204) {
      return -1;
    }
    return 0;
  },
};

export default sellerService;
