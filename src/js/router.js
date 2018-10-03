import Router from 'vanilla-router'
const router = new Router({
  mode: 'history',
  page404: function (path) {
      console.log('"/' + path + '" Page not found');
  }
});

router.add('', function () {
  console.log('Login page');
})

router.add('/tasks', function () {
  console.log('Task page');
})

export default router
