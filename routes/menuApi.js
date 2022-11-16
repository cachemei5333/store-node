const Menu = require('../controller/menu');

const menuApi = (router) => {
  // 获得树形状结构的菜单列表数据
  router.get('/menu/tree_list', (req, res, next) => {
    Menu.getTreeList(req, res, next);
  });

  // 获得权限列表
  router.get('/menu/permissions_list', (req, res, next) => {
    Menu.getPermissionList(req, res, next);
  });
};

module.exports = menuApi;
