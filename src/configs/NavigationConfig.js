import {
  DashboardOutlined,
  FileOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  DollarOutlined,
  BankOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "Güncel Durum",
    path: `${APP_PREFIX_PATH}/dashboard`,
    title: "Güncel Durum",
    icon: DashboardOutlined,
    submenu: [],
  },
  {
    key: "Seller",
    path: `${APP_PREFIX_PATH}/seller`,
    title: "Satıcı Yönetimi",
    icon: DashboardOutlined,
    submenu: [
      {
        key: "Onay Bekleyen",
        path: `${APP_PREFIX_PATH}/seller/pending-approval`,
        title: "Onay Bekleyen",
        icon: ClockCircleOutlined,
        submenu: [],
      },
      {
        key: "Onaylanan",
        path: `${APP_PREFIX_PATH}/seller/approved`,
        title: "Onaylanan",
        icon: CheckCircleOutlined,
        submenu: [],
      },
    ],
  },
  {
    key: "Genel",
    path: `${APP_PREFIX_PATH}/commons`,
    title: "Genel Ayarlar",
    icon: InfoCircleOutlined,
    submenu: [
      {
        key: "Genel",
        path: `${APP_PREFIX_PATH}/commons`,
        title: "Tanımlamalar",
        icon: InfoCircleOutlined,
        submenu: [
          {
            key: "Döküman Tipleri",
            path: `${APP_PREFIX_PATH}/commons/documents`,
            title: "Satıcı Döküman Tipleri ",
            icon: FileOutlined,
            submenu: [],
          },
          {
            key: "İl/İlçe Yönetimi",
            path: `${APP_PREFIX_PATH}/commons/regions`,
            title: "İl/İlçe Yönetimi ",
            icon: GlobalOutlined,
            submenu: [],
          },
          {
            key: "vergi",
            path: `${APP_PREFIX_PATH}/commons/tax-offices`,
            title: "Vergi Daireleri",
            icon: DollarOutlined,
            submenu: [],
          },
          {
            key: "banks",
            path: `${APP_PREFIX_PATH}/commons/banks`,
            title: "Banka Yönetimi",
            icon: BankOutlined,
            submenu: [],
          },
        ],
      },
    ],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
