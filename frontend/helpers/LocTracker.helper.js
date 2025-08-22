import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import * as Location from "expo-location";

export default function LocTracker() {
  const [locations, setLocations] = useState([]);
  const [showLogs, setShowLogs] = useState(true);

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

      const newLog = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        timestamp: new Date().toLocaleString(),
      };

      setLocations((prev) => [...prev, newLog]);
    };

    getLocation();
    interval = setInterval(getLocation, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, marginTop: 40, padding: 10 }}>
      <Button
        title={showLogs ? "Hide Logs" : "Show Logs"}
        onPress={() => setShowLogs((prev) => !prev)}
      />

      {showLogs && (
        <>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
            Location Logs:
          </Text>
          <FlatList
            data={locations}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text>
                {item.timestamp} → Lat: {item.latitude}, Lon: {item.longitude}
              </Text>
            )}
          />
        </>
      )}
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Button
          title="Clear Logs"
          onPress={() => setLocations([])}
        />
      </View>
    </View>
  );
}

