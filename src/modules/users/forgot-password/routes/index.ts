import { RouteConfig } from 'vue-router';

type UsersForgotPasswordView = Promise<typeof import('../views/index.vue')>;

const routes: RouteConfig[] = [
  {
    component: (): UsersForgotPasswordView => import(
      /* eslint-disable capitalized-comments */
      /* webpackChunkName: "users-forgot-password" */
      '../views/forgot-password.vue'
    ),
    name: 'users-forgot-password',
    path: '/users/forgot-password'
  }
];

export default routes;
