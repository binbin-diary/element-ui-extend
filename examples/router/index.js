import app from '../app.vue';
const router = [
  {
    path: '/',
    component: app,
    redirect: '/test',
    children: [
      {
        path: '/test',
        name: 'test',
        component: () => import('examples/component/test')
      }
    ]
  }
]

export default router;