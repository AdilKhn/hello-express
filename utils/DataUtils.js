export default class DataUtils {

  constructor() {
    this.data = {
      names: [ 'marge', 'homer', 'bart', 'lisa', 'maggie']
    };
  }

  apiGet(){
    console.log('Handling apiGet');
    return this.data;
  }

  apiPost(req) {
    this.data.names.push(req.body.name);
    console.log('Post happend' + JSON.stringify(req.body));
  }
}
