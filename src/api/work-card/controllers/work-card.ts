/**
 * work-card controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::work-card.work-card', ({ strapi }) => ({


  // other methods such as find , findByOne, create, update, delete are already implemented in Strapi core controller
  async findBySlug(ctx) {
    try {
      // Extract the query params
      const { query } = ctx;
      
      // Get the current user from the context
  //    const user = ctx.state.user;  // This is only required when using JWT and claims has to be extracted.
      
      // Find the entity
      const entity = await strapi.entityService.findMany('api::work-card.work-card', {
        filters: { slug: ctx.params.slug },
        ...query,
      });

      if (!entity || entity.length === 0) {
        return ctx.notFound('Work card not found');
      }

      // Return the first matching entity
      const sanitizedEntity = await this.sanitizeOutput(entity[0], ctx);
      return this.transformResponse(sanitizedEntity);
    } catch (error) {
      ctx.body = error;
      return ctx.badRequest('Error occurred while fetching work card');
    }
  }
}));
