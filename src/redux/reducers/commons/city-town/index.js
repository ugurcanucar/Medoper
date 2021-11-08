import {
  SET_CITIES,
  SET_CITY_MODAL_VISIBLE,
  SET_COPYOF_CITIES,
  SET_COPY_SELECTED_DISTRICT,
  SET_DISTRICTS,
  SET_DISTRICT_MODAL_VISIBLE,
  SET_EDITABLE_CITY,
  SET_EDITABLE_DISTRICT,
  SET_SELECTED_DISTRICT,
} from "redux/constants/commons/city-town";

const initState = {
  cityList: { Data: [] },
  copyCityList: { Data: [] },
  districtList: { Data: [] },
  selectedDistrict: [],
  copySelectedDistrict: [],
  editableCity: {},
  editableDistrict: {},
  cityModalVisible: false,
  districtModalVisible: false,
};
const citytown = (state = initState, action) => {
  switch (action.type) {
    case SET_CITIES:
      return {
        ...state,
        cityList: action.cityList,
      };
    case SET_COPYOF_CITIES:
      return {
        ...state,
        copyCityList: action.copyCityList,
      };
    case SET_DISTRICTS:
      return {
        ...state,
        districtList: action.districtList,
      };
    case SET_SELECTED_DISTRICT:
      return {
        ...state,
        selectedDistrict: action.selectedDistrict,
      };
    case SET_COPY_SELECTED_DISTRICT:
      return {
        ...state,
        copySelectedDistrict: action.copySelectedDistrict,
      };
    case SET_EDITABLE_CITY:
      return {
        ...state,
        editableCity: action.editableCity,
      };
    case SET_EDITABLE_DISTRICT:
      return {
        ...state,
        editableDistrict: action.editableDistrict,
      };

    case SET_CITY_MODAL_VISIBLE:
      return {
        ...state,
        cityModalVisible: action.cityModalVisible,
      };

    case SET_DISTRICT_MODAL_VISIBLE:
      return {
        ...state,
        districtModalVisible: action.districtModalVisible,
      };

    default:
      return state;
  }
};

export default citytown;
