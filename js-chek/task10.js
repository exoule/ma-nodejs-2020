class Storage {
  constructor() {
    this.database = {
      Man: 100,
    };
  }

  list() {
    return new Promise(res => {
      res(Object.keys(this.database));
    });
  }

  fetch(key) {
    return new Promise((res, rej) => {
      if (!this.database[key]) rej();

      res(this.database[key]);
    });
  }

  store(key, data) {
    return new Promise((res, rej) => {
      if (this.database[key]) rej();

      this.database[key] = data;
      res('storeOK');
    });
  }

  destroy(key) {
    return new Promise((res, rej) => {
      if (this.database[key]) {
        delete this.database[key];

        res('destroyOk');

      }

      rej();
    });
  }

  storeList(data) {
    return new Promise((res, rej) => {
      if (data.length === 0) {
        rej('no');
      }
      data.forEach(Element => {
        const key = Object.keys(Element)[0];
        this.database[key] = Element[key];

      });
      res('storeLisk is ok');
    });
  }

  destroyStartedWith(beginningOfKey) {
    return new Promise((res, rej) => {
      Object.keys(this.database).forEach(key => {
        if (key.startsWith(beginningOfKey)) {
          delete this.database[key];
        }
      });
      res('delete is ok');
    });
  }
  fetchInTimeOrFail(key, timeout) {
    return new Promise((res, rej) => {
      const newStart = new Date();
      const data = this.database[key];

      if (new Date() - newStart > timeout) rej('sad');

      res(data);
    });
  }

}
