import { AxiosRequestConfig } from "./tpes";
import xhr from "./xhr";

function axios(config: AxiosRequestConfig) {
  xhr(config)
}

export default axios
