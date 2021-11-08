import { combineReducers } from "redux";
import Auth from "./Auth";
import Documents from "redux/reducers/commons/Documents";
import SubHeader from "redux/reducers/sub-header";
import CityTown from "redux/reducers/commons/city-town";
import TaxOffices from "redux/reducers/commons/tax-offices";
import Banks from "redux/reducers/commons/banks";
import Seller from "redux/reducers/sellers";

const reducers = combineReducers({
  auth: Auth,
  document: Documents,
  subheader: SubHeader,
  citytown: CityTown,
  taxoffices: TaxOffices,
  banks: Banks,
  seller: Seller,
});

export default reducers;
