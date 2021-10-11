// This file is created by egg-ts-helper@1.27.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/model/home';

declare module 'egg' {
  interface IModel {
    Home: ReturnType<typeof ExportHome>;
  }
}
