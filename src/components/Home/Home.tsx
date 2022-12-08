import React from "react";

import { MapChart } from "./Map/MapChart";
import { TaskManager } from "./TaskManager";

export const Home = () => {
  return (
    <>
      <MapChart />
      <TaskManager />
    </>
  );
};
