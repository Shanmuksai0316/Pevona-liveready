import type { Attribute, Schema } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
    metaRobots: Attribute.String & Attribute.DefaultTo<'index, follow'>;
    metaTitle: Attribute.String;
    metaViewport: Attribute.String &
      Attribute.DefaultTo<'width=device-width, initial-scale=1'>;
    structuredData: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
    }
  }
}
