'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Configure Public role permissions for Property and Blog
    try {
      const publicRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });

      if (publicRole) {
        const permissions = await strapi
          .query('plugin::users-permissions.permission')
          .findMany({
            where: {
              role: publicRole.id,
              action: {
                $in: [
                  'api::property.property.find',
                  'api::property.property.findOne',
                  'api::blog.blog.find',
                  'api::blog.blog.findOne',
                ],
              },
            },
          });

        // Enable find and findOne for properties and blogs
        const actionsToEnable = [
          'api::property.property.find',
          'api::property.property.findOne',
          'api::blog.blog.find',
          'api::blog.blog.findOne',
        ];

        for (const action of actionsToEnable) {
          const existingPermission = permissions.find((p) => p.action === action);
          if (!existingPermission) {
            await strapi
              .query('plugin::users-permissions.permission')
              .create({
                data: {
                  action,
                  role: publicRole.id,
                },
              });
          }
        }

        console.log('✅ Public role permissions configured for Property and Blog');
      }
    } catch (error) {
      console.warn('⚠️ Could not configure permissions automatically:', error.message);
      console.warn('   Please configure permissions manually in Strapi admin:');
      console.warn('   Settings → Roles → Public → Enable find & findOne for Property and Blog');
    }
  },
};
