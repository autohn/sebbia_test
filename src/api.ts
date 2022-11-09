class sebbiaapi {
  static baseUrl = "http://testtask.sebbia.com/v1";
  static categories = this.baseUrl + "/news/categories/";

  static news(id: number, page: number = 0) {
    return `${this.baseUrl}/news/categories/${id}/news?page=${page}`;
  }

  static details(id: number) {
    return `${this.baseUrl}/news/details?id=${id}`;
  }
}

export default sebbiaapi;
