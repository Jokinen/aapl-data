import axios, { AxiosInstance } from "axios";

import configs from "./configs";

class AlphaVantageService {
  apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: configs.alphaVantageApiUrl,
      timeout: 1000,
      paramsSerializer: (params: Record<string, string>) =>
        new URLSearchParams({
          ...params,
          apikey: configs.alphaVantageApiUrl,
        }).toString(),
    });
  }

  getAppleData() {
    const params = {
      function: "TIME_SERIES_DAILY_ADJUSTED",
      symbol: "AAPL",
    };

    return this.apiClient.get("/query", {
      params,
    });
  }
}

export default new AlphaVantageService();
