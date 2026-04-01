import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
    const { queryClient } = Route.useRouteContext();

  return (
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ReactQueryDevtools />
        <TanStackRouterDevtools />
      </QueryClientProvider>
  );
}