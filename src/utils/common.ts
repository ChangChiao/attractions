import { toast } from "react-toastify";

// const history = createBrowserHistory({ forceRefresh: true });

export const showToast = (msg: string, type = "success") => {
  if (msg) {
    type === "error" && toast.error(msg);
    type === "success" && toast.success(msg);
  }
};

export const transDate = (string: string) => {
  let date = new Date(string);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return `${year}/${month}/${day}`;
};
