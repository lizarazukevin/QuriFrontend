import { createRouter } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { routeTree } from './routeTree.gen.ts';

export const createQueryClient = () => new QueryClient();

export const getRouter = () => {
  const queryClient = createQueryClient();

  return createRouter({
    routeTree,
    context: { queryClient },
    defaultPreload: 'intent',
  });
};