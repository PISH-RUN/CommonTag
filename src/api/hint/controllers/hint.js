'use strict';

const _ = require("lodash/fp");
/**
 *  hint controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::hint.hint',
  ({strapi}) => ({
    async import(ctx) {
      const { json } = ctx.request.body;

      if(_.isArray(json)){
        const hints = await strapi.db.query("api::hint.hint")
          .createMany({ data: json });

        return {
          data: hints
        };
      }

      return {
        ok: false
      }
    }
  })
);
