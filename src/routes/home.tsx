import usePageTitle from "@/layout/use-page-title.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
	component: RouteComponent,
});

function RouteComponent() {
	usePageTitle("Home");
	return <div>Hello "/home"!</div>;
}
