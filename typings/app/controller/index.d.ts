// This file is created by egg-ts-helper@1.34.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    user: ExportUser;
  }
}
