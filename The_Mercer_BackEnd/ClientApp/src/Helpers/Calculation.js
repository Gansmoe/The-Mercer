

export const MatchValues = (telemetry, rooms, range) => {
    

    if (telemetry.length >= 1) {

        for (let i = 0; i < rooms.length; i++) {

            if (telemetry[0].deviceId === rooms[i].tempDevice) {
                rooms[i].tempValue = Math.round(telemetry[0].value);
                rooms[i].time = new Date(telemetry[0].time * 1000).toLocaleTimeString();
                
                for (let x = 0; x < range.length; x++) {
                    if (range[x].id === rooms[i].tempDevice.toLowerCase()) {
                        if (rooms[i].tempValue >= range.maxValue) {
                            rooms[i].tempAlarm = true;
                        } else if (rooms[i].tempValue <= range.minValue) {
                            rooms[i].tempAlarm = true;
                        }
                    }
                }
                return rooms;
            }
            else if (telemetry[0].deviceId === rooms[i].humidDevice) {
                rooms[i].humidValue = Math.round(telemetry[0].value);
                rooms[i].time = new Date(telemetry[0].time * 1000).toLocaleTimeString();
                for (let y = 0; y < range.length; y++) {
                    if (range[y].id === rooms[i].humidDevice.toLowerCase()) {
                        if (rooms[i].humidValue >= range[y].maxValue) {
                            rooms[i].humidAlarm = true;
                        } else if (rooms[i].humidValue <= range[y].minValue) {
                            rooms[i].humidAlarm = true;
                        }
                    }

                }
                return rooms;
            }
        }
    }



    return rooms;
}