import { createFileRoute } from '@tanstack/react-router'
import useTitle from "@/layout/use-title.tsx";

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
    useTitle('Home');
  return <div>Hello "/home"!</div>
}
