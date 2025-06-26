import hookApi from "../../../hooks/api";
import { IMenu, IUrl } from "./props";

export const fetchMenu = async () => {
    const { post } = hookApi();
  
    const result = (await post({ url: `/api/menu/getTable`, body: {} }));

    if (!result.isValid) {
      return;
    }

    const data = result.data as IMenu[];
    return data;
  }
