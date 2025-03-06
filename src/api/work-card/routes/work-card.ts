/**
 * work-card router
 */

import { factories } from '@strapi/strapi';

export default {
  routes: [
    // Custom route for finding by slug
    {
      method: 'GET',
      path: '/work-cards/slug/:slug',
      handler: 'api::work-card.work-card.findBySlug',
      config: {
        auth: { scope: ['api::work-card.work-card.find'] },
        policies: [],
        middlewares: [],
      },
    },
    // Default routes
    {
      method: 'GET',
      path: '/work-cards',
      handler: 'api::work-card.work-card.find',
      config: {
        auth: { scope: ['api::work-card.work-card.find'] },
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/work-cards/:id',
      handler: 'api::work-card.work-card.findOne',
      config: {
        auth: { scope: ['api::work-card.work-card.find'] },
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/work-cards',
      handler: 'api::work-card.work-card.create',
      config: {
        auth: { scope: ['api::work-card.work-card.create'] },
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/work-cards/:id',
      handler: 'api::work-card.work-card.update',
      config: {
        auth: { scope: ['api::work-card.work-card.update'] },
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/work-cards/:id',
      handler: 'api::work-card.work-card.delete',
      config: {
        auth: { scope: ['api::work-card.work-card.delete'] },
        policies: [],
        middlewares: [],
      },
    },
  ],
};
