import React from "react";

import { IDataMarkers } from "@types";
import { useActions, useTypedSelector } from "hooks";

export const TaskManager = () => {
  const markers = useTypedSelector((state) => state.markers);
  const { setStatus } = useActions();

  return (
    <div>
      {markers?.map((marker: IDataMarkers) => (
        <div key={marker.id}>
          <p>{marker.id}</p>
          <button onClick={() => setStatus(marker.id)}>Complete Task</button>
          {marker.status ? (
            <div className="text-[green]">YES</div>
          ) : (
            <div className="text-[red]">NO</div>
          )}
        </div>
      ))}
    </div>
  );
};
