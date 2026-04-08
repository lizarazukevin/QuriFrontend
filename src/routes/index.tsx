import { Show, SignInButton, UserButton } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "2rem",
			}}
		>
			<h1>Quri</h1>

			<Show when="signed-in">
				<UserButton />
			</Show>

			<Show when="signed-out">
				<SignInButton mode="modal" />
			</Show>
		</div>
	);
}
