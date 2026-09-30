import dynamic from "next/dynamic";

export const ServiceRegistry: Record<string, React.ComponentType> = {
  cinemaads: dynamic(() => import("./cinemaads")),
  primeaudiencemarketing: dynamic(() => import("./primeaudiencemarketing")),
  radioads: dynamic(() => import("./radioads")),
  mallads: dynamic(() => import("./mallads")),
  printedads: dynamic(() => import("./printedads")),
  airportads: dynamic(() => import("./airportads")),
};
