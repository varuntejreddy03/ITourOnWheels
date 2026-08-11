import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/journeys")({
  component: () => <Outlet />,
});