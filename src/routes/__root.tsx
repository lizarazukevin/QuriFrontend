import { ClerkProvider } from "@clerk/tanstack-react-start";
import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
/// <reference types="vite/client" />
import type { ReactNode } from "react";

interface RouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "Quri" },
		],
	}),
	notFoundComponent: () => <p>Page not found</p>,
	component: RootComponent,
});

function RootComponent() {
	const { queryClient } = Route.useRouteContext();

	return (
		<ClerkProvider>
			<QueryClientProvider client={queryClient}>
				<RootDocument>
					<Outlet />
				</RootDocument>
				<ReactQueryDevtools />
				<TanStackRouterDevtools />
			</QueryClientProvider>
		</ClerkProvider>
	);
}

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
