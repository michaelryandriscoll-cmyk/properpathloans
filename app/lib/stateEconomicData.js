// app/lib/stateEconomicData.js
//
// Real, sourced per-state cost-of-living data — used to give state hub
// pages genuine differentiation instead of templated copy with just the
// state name swapped in.
//
// Source: Missouri Economic Research and Information Center (MERIC),
// Cost of Living Data Series, Q1 2026 (C2ER survey data).
// https://meric.mo.gov/data/cost-living-data-series
// Index is normalized so the U.S. average = 100.

const stateEconomicData = {
  alabama:          { costOfLivingIndex: 85.0 },
  alaska:           { costOfLivingIndex: 129.0 },
  arizona:          { costOfLivingIndex: 107.6 },
  arkansas:         { costOfLivingIndex: 89.1 },
  california:       { costOfLivingIndex: 140.5 },
  colorado:         { costOfLivingIndex: 101.8 },
  connecticut:      { costOfLivingIndex: 114.2 },
  delaware:         { costOfLivingIndex: 101.7 },
  florida:          { costOfLivingIndex: 100.7 },
  georgia:          { costOfLivingIndex: 90.6 },
  hawaii:           { costOfLivingIndex: 184.8 },
  idaho:            { costOfLivingIndex: 101.7 },
  illinois:         { costOfLivingIndex: 95.1 },
  indiana:          { costOfLivingIndex: 88.3 },
  iowa:             { costOfLivingIndex: 88.6 },
  kansas:           { costOfLivingIndex: 87.6 },
  kentucky:         { costOfLivingIndex: 92.5 },
  louisiana:        { costOfLivingIndex: 91.1 },
  maine:            { costOfLivingIndex: 114.6 },
  maryland:         { costOfLivingIndex: 121.1 },
  massachusetts:    { costOfLivingIndex: 147.8 },
  michigan:         { costOfLivingIndex: 93.9 },
  minnesota:        { costOfLivingIndex: 93.4 },
  mississippi:      { costOfLivingIndex: 86.2 },
  missouri:         { costOfLivingIndex: 88.6 },
  montana:          { costOfLivingIndex: 105.9 },
  nebraska:         { costOfLivingIndex: 91.3 },
  nevada:           { costOfLivingIndex: 100.7 },
  "new-hampshire":  { costOfLivingIndex: 110.1 },
  "new-jersey":     { costOfLivingIndex: 118.8 },
  "new-mexico":     { costOfLivingIndex: 89.9 },
  "new-york":       { costOfLivingIndex: 124.7 },
  "north-carolina": { costOfLivingIndex: 96.6 },
  "north-dakota":   { costOfLivingIndex: 90.7 },
  ohio:             { costOfLivingIndex: 93.7 },
  oklahoma:         { costOfLivingIndex: 83.5 },
  oregon:           { costOfLivingIndex: 109.6 },
  pennsylvania:     { costOfLivingIndex: 96.2 },
  "rhode-island":   { costOfLivingIndex: 111.2 },
  "south-carolina": { costOfLivingIndex: 91.9 },
  "south-dakota":   { costOfLivingIndex: 94.1 },
  tennessee:        { costOfLivingIndex: 88.9 },
  texas:            { costOfLivingIndex: 90.7 },
  utah:             { costOfLivingIndex: 100.6 },
  vermont:          { costOfLivingIndex: 113.0 },
  virginia:         { costOfLivingIndex: 99.1 },
  washington:       { costOfLivingIndex: 114.6 },
  "west-virginia":  { costOfLivingIndex: 87.9 },
  wisconsin:        { costOfLivingIndex: 97.4 },
  wyoming:          { costOfLivingIndex: 93.7 },
};

export const stateEconomicDataSource = {
  name: "Missouri Economic Research and Information Center (MERIC)",
  url: "https://meric.mo.gov/data/cost-living-data-series",
  period: "Q1 2026",
};

export default stateEconomicData;
