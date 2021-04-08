import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export const apiEndpoint = 'https://news-react.cdn.prismic.io/api/v2';
export const PRISMIC_ACCESS_TOKEN =
  'MC5ZR3ViSlJNQUFDQUFlazVp.77-9Zu-_ve-_ve-_ve-_ve-_ve-_ve-_vTk5c1Lvv70S77-977-9QO-_ve-_ve-_ve-_vQpa77-977-977-9C--_vRhr77-9';

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(apiEndpoint, {
    req,
    accessToken: PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}
