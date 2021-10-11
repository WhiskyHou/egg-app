import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { name } = this.ctx.request.query || 'default';
    const agent = this.ctx.request.header['user-agent'] || 'null-agent';
    this.ctx.body = await this.ctx.service.home.record(name, agent);
  }
}
