

export const MatchValues = (telemetry, rooms) => {


     if (telemetry != null) {

         for (let i = 0; i < rooms.length; i++) {

             if (telemetry[0].deviceId === rooms[i].tempDevice) {
                 rooms[i].tempValue = Math.round(telemetry[0].value);
                 rooms[i].time = new Date(telemetry[0].time * 1000).toLocaleTimeString();
             }
             else if (telemetry[0].deviceId === rooms[i].humidDevice) {
                 rooms[i].humidValue = Math.round(telemetry[0].value);
                 rooms[i].time = new Date(telemetry[0].time * 1000).toLocaleTimeString();
             }
         }
     }

    return rooms;
}