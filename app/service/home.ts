import { Service } from 'egg';
import Model from '../model/home';

export default class HomeService extends Service {
  async record(name: string, agent: string) {
    const doc = new Model({ name, agent });
    await doc.save();
    return 'welcome';
  }
}
