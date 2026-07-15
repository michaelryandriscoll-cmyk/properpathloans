import stateCityMap from "@/app/lib/stateCityMap";

// Generates links to other cities in the same state
export function sameStateLinks(state) {
  return stateCityMap[state]?.cities || [];
}

// Generates cross-state lateral SEO links — returns real { slug, stateName }
// pairs for PPL's actual /personal-loans/[state] routes (previously returned
// a "stateLoanSlug" field left over from the SBC business-loan fork that
// didn't correspond to any real route on this site).
export function nextMarkets(state) {
  const stateKeys = Object.keys(stateCityMap);
  const index = stateKeys.indexOf(state);
  return [stateKeys[index - 1], stateKeys[index + 1]]
    .filter((key) => key && stateCityMap[key])
    .map((key) => ({ slug: key, stateName: stateCityMap[key].stateName }));
}