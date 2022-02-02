"use strict";

const _ = require("lodash/fp");
/**
 *  category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async import(ctx) {
      const { json } = ctx.request.body;

      if(_.isArray(json)){
        const categories = await strapi.db.query("api::category.category")
          .createMany({ data: json });

        return {
          data: categories
        };
      }

      return {
        ok: false
      }
    }
  })
);
