import { useState } from "react";

const fixtures = [
  {
    area: "Gaming Room",
    items: [
      {
        type: "Downlight",
        label: "GR-DL1",
        location: "Right of bar near POS",
        system: "Lighting",
        notes: "DALI loop 1",
        status: "🟡",
      },
      {
        type: "Downlight",
        label: "GR-DL2",
        location: "Centre of gaming ceiling",
        system: "Lighting",
        notes: "Check mounting",
        status: "🔴",
      },
      {
        type: "Emergency Light",
        label: "GR-EL1",
        location: "Rear exit, gaming room",
        system: "Emergency",
        notes: "Check AS 2293 spacing",
        status: "🔴",
      }
    ]
  },
  {
    area: "Bar",
    items: [
      {
        type: "Pendant Light",
        label: "BAR-PL1",
        location: "Above main bar counter",
        system: "Lighting",
        notes: "Suspended from steel framing",
        status: "🟢",
      }
    ]
  }
];

export defaut
