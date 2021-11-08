import { notification } from "antd";

const NotificationService = {};

NotificationService.CustomNotification = function CustomNotification(
  icon,
  title,
  description
) {
  return notification[icon]({
    message: title,
    description: description,
  });
};

NotificationService.SaveSuccess = function SaveSuccess() {
  return notification["success"]({
    message: "İşlem Başarılı!",
    description: "Yeni kayıt oluşturma işlemi başarılı şekilde sonlandırıldı.",
  });
};

NotificationService.SaveError = function SaveError() {
  return notification["error"]({
    message: "İşlem Başarısız!",
    description:
      "Kayıt işlemi sırasında bir hata ile karşılaşıldı.Boş alanları kontrol edip tekrar deneyiniz. ",
  });
};

NotificationService.UpdateSuccess = function UpdateSuccess() {
  return notification["success"]({
    message: "İşlem Başarılı!",
    description: "Güncelleme işlemi başarılı şekilde sonlandırıldı.",
  });
};

NotificationService.DeleteSuccess = function DeleteSuccess() {
  return notification["success"]({
    message: "İşlem Başarılı!",
    description: "Silme işlemi başarılı şekilde sonlandırıldı.",
  });
};

NotificationService.MoveSuccess = function MoveSuccess() {
  return notification["success"]({
    message: "İşlem Başarılı!",
    description: "Taşıma işlemi başarılı şekilde sonlandırıldı.",
  });
};

export default NotificationService;
