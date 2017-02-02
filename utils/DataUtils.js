export default class DataUtils {

  static apiGet(){
    return {
      names: [ 'marge', 'homer', 'bart', 'lisa', 'maggie']
    };
  }

  static apiPost(req) {
   console.log('Post happend' + JSON.stringify(req.body));
  }
}
