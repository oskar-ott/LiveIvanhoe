import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

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

export default function FitoutMobileApp() {
  const [openSections, setOpenSections] = useState({});
  const [fixturesState, setFixturesState] = useState(fixtures);

  const toggleSection = (area) => {
    setOpenSections((prev) => ({ ...prev, [area]: !prev[area] }));
  };

  const updateStatus = (areaIndex, itemIndex, newStatus) => {
    const updated = [...fixturesState];
    updated[areaIndex].items[itemIndex].status = newStatus;
    setFixturesState(updated);
  };

  const statusOptions = ["🔴", "🟡", "🟢"];

  return (
    <div className="p-4 space-y-6">
      {fixturesState.map((zone, areaIdx) => (
        <div key={zone.area} className="bg-white rounded-2xl shadow p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold">{zone.area}</h2>
            <Button variant="outline" size="sm" onClick={() => toggleSection(zone.area)}>
              {openSections[zone.area] ? "Close" : "Open"}
            </Button>
          </div>
          {openSections[zone.area] && (
            <div className="grid grid-cols-1 gap-3">
              {zone.items.map((item, itemIdx) => (
                <Card key={item.label} className="border shadow-sm">
                  <CardContent className="p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{item.type} — 📍 {item.location}</h3>
                      <Popover>
                        <PopoverTrigger asChild>
                          <div className="text-2xl cursor-pointer">{item.status}</div>
                        </PopoverTrigger>
                        <PopoverContent className="flex space-x-2">
                          {statusOptions.map((status) => (
                            <div
                              key={status}
                              className="text-2xl cursor-pointer"
                              onClick={() => updateStatus(areaIdx, itemIdx, status)}
                            >
                              {status}
                            </div>
                          ))}
                        </PopoverContent>
                      </Popover>
                    </div>
                    <p className="text-sm text-gray-600">{item.system}</p>
                    <Textarea value={item.notes} readOnly className="text-xs bg-gray-50" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
