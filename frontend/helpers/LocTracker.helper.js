import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import * as Location from "expo-location";

export default function LocTracker() {
  const [location, setLocation] = useState(null);
  const [showLocation, setShowLocation] = useState(true);

  useEffect(() => {
    let interval;
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("location access permission denied");
        return;
      }
      let loc = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        timestamp: new Date().toLocaleString(),
      });
    };

    getLocation();
    interval = setInterval(getLocation, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 40, padding: 10 }}>
      <Button
        title={showLocation ? "Hide Location" : "Show Location"}
        onPress={() => setShowLocation((prev) => !prev)}
      />

      {showLocation && location && (
        <View
          style={{
            marginTop: 20,
            padding: 15,
            borderRadius: 10,
            backgroundColor: "#f0f0f0",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Current Location:
          </Text>
          <Text>Time: {location.timestamp}</Text>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
        </View>
      )}
    </View>
  );
}
