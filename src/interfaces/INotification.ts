export interface INotification {
  isOpen: boolean;
  icon: "error" | "success" | "warning" | "info";
  title: string;
  message: string;
  onClose: () => void;
}
