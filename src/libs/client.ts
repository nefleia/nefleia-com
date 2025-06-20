import { createClient } from 'microcms-js-sdk';

const serviceDomain = process.env.MICRO_CMS_SERVICE_DOMAIN;
if (!serviceDomain) {
  throw new Error(
    'MICROCMS_SERVICE_DOMAIN environment variable is not defined',
  );
}

const apiKey = process.env.MICRO_CMS_API_KEY;
if (!apiKey) {
  throw new Error('MICROCMS_API_KEY environment variable is not defined');
}

export const client = createClient({
  serviceDomain,
  apiKey,
});
