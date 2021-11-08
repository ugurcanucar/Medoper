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

export const setCity = (cityList) => {
  return {
    type: SET_CITIES,
    cityList,
  };
};
export const setCopyCity = (copyCityList) => {
  return {
    type: SET_COPYOF_CITIES,
    copyCityList,
  };
};
export const setDistricts = (districtList) => {
  return {
    type: SET_DISTRICTS,
    districtList,
  };
};
export const setSelectedDistrict = (selectedDistrict) => {
  return {
    type: SET_SELECTED_DISTRICT,
    selectedDistrict,
  };
};
export const setCopySelectedDistrict = (copySelectedDistrict) => {
  return {
    type: SET_COPY_SELECTED_DISTRICT,
    copySelectedDistrict,
  };
};
export const setEditableCity = (editableCity) => {
  return {
    type: SET_EDITABLE_CITY,
    editableCity,
  };
};
export const setEditableDistrict = (editableDistrict) => {
  return {
    type: SET_EDITABLE_DISTRICT,
    editableDistrict,
  };
};
export const setCityModalVisible = (cityModalVisible) => {
  return {
    type: SET_CITY_MODAL_VISIBLE,
    cityModalVisible,
  };
};
export const setDistrictModalVisible = (districtModalVisible) => {
  return {
    type: SET_DISTRICT_MODAL_VISIBLE,
    districtModalVisible,
  };
};
