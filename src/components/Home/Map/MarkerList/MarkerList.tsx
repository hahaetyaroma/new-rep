import Link from "next/link";
import React, { useState } from "react";

import { IDataMarkers } from "@types";
import { useTypedSelector } from "hooks";
import { Marker, Popup } from "react-map-gl";

export const MarkerList = () => {
  const markers = useTypedSelector((state) => state.markers);
  const [popupInfo, setPopupInfo] = useState<IDataMarkers | null>(null);

  return (
    <>
      {markers.map((marker: IDataMarkers) => (
        <Marker
          key={marker.id}
          onClick={(e) => {
            setPopupInfo(marker);
            e.originalEvent.stopPropagation();
          }}
          latitude={marker.latitude}
          longitude={marker.longitude}
          color="red"
        />
      ))}

      {popupInfo && (
        <Popup
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          onClose={() => setPopupInfo(null)}
        >
          <div>
            <p>
              Статус выполнения задачи:{" "}
              <span className="font-[700]">{`${popupInfo.status}`}</span>
            </p>
          </div>
          <hr />
          <div className="grid text-[#222]">
            <Link
              href={`https://yandex.ru/maps/65/novosibirsk/?ll=82.920430%2C55.030199&mode=routes&rtext=${popupInfo.latitude}%2C${popupInfo.longitude}&rtt=auto&ruri=&z=12`}
            >
              Проложить маршрут на{" "}
              <span className="font-[700]">Yandex.Maps</span>
            </Link>
            <Link
              href={`https://yandex.ru/maps/65/novosibirsk/?ll=82.920430%2C55.030199&mode=routes&rtext=${popupInfo.latitude}%2C${popupInfo.longitude}&rtt=auto&ruri=&z=12`}
            >
              Проложить маршрут на <span className="font-[700]">2gis</span>
            </Link>
            <Link
              href={`https://yandex.ru/maps/65/novosibirsk/?ll=82.920430%2C55.030199&mode=routes&rtext=${popupInfo.latitude}%2C${popupInfo.longitude}&rtt=auto&ruri=&z=12`}
            >
              Проложить маршрут на{" "}
              <span className="font-[700]">Google Maps</span>
            </Link>
          </div>
        </Popup>
      )}
    </>
  );
};
