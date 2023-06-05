"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Skeleton } from "@mui/material";
interface Coordinates {
  latitude: number;
  longitude: number;
}

interface GeolocationError {
  code: number;
  message: string;
}

interface Location {
  placeName: string;
  latitude: number;
  longitude: number;
}

const LoadMap = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        if (window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(
            (position: any) => {
              const { latitude, longitude } = position.coords;
              setCoordinates({ latitude, longitude });
              getLocationName(latitude, longitude);
            },
            (error: GeolocationError) => {
              console.error(error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      }
    } catch {}
  }, []);

  const getLocationName = async (
    latitude: number,
    longitude: number
  ): Promise<void> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      const placeName = data.display_name;
      setLocation({ placeName, latitude, longitude });
    } catch (error) {
      console.error(error);
    }
  };

  const address2 = { lat: 10.8508622, lng: 106.6316027 };
  const address3 = { lat: 10.7574319, lng: 106.6085853 };

  return (
    <div id="planting-locations" className="md:w-2/3 sm:w-3/4 w-full">
      {coordinates && location ? (
        <div>
          <MapContainer
            center={[10.8508622, 106.6316027]}
            zoom={13}
            scrollWheelZoom={true}
            doubleClickZoom={true}
            zoomControl
            className="w-full h-80"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[coordinates.latitude, coordinates.longitude]}>
              <Popup>
                Vị trí của bạn <br />
              </Popup>
            </Marker>

            <Marker position={address2}>
              <Popup>
                Vị trí của Team building
                <br />
              </Popup>
            </Marker>
            <Marker position={address3}>
              <Popup>
                Nhà trường
                <br />
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <section>
          <Skeleton
            variant="text"
            animation="wave"
            className="lg:w-[600px] sm:w-[540px] w-80"
            sx={{ fontSize: "1rem" }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            className="lg:w-[600px] sm:w-[540px] w-80"
            sx={{ fontSize: "1rem" }}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            className="lg:w-[600px] sm:w-[540px] w-80"
            height={320}
          />
        </section>
      )}
    </div>
  );
};

export default LoadMap;
