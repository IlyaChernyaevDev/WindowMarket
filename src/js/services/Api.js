export class Api {
  constructor(url) {
    this.url = url;
  }

  async postFormData(data) {
    return await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    })
    .then(data => data.json());
  }
}