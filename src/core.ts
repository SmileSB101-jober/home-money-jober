import axios, { AxiosInstance } from "axios";

export class PayRateCrawler {
  private readonly instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({ baseURL: "http://wzdig.pbc.gov.cn:8080" });
  }

  public getData() {
    const formData = new FormData();
    formData.append("q", "lpr");

    this.instance
      .post(
        "search/pcRender?pageId=fa445f64514c40c68b1c8ffe859c649e",
        formData,
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
