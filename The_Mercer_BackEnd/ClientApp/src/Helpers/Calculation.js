

export const MatchValues = (telemetry, rooms) => {
    // let object = {}

    // for (let room in rooms) {
    //     if (room.deviceid == Telemetry.deviceid) {
    //         object.push(room)
    //         object.push(Telemetry.value)
    //     }
    // }

/*   if (telemetry.length >= 1) {
      rooms.forEach(room => {
          if (telemetry[0].id.deviceId === room.tempDevice || room.humidDevice) {
              room.value = telemetry[0].value;
              console.log("Hej från ifsats");

          }
      })
  } */



     if (telemetry != null) {

         for (let i = 0; i < rooms.length; i++) {

            console.log("Rooms i match values: ", rooms);
            console.log("Telemetry i match values: ", telemetry);

             if (telemetry.id[1] === rooms[i].tempDevice) {
                 rooms[i].value = telemetry[0].value
                 console.log("i FOR loop Calculations", rooms[i]);
                 break;
             }
             break;
         }
     }

/*     console.log("testDataFörTelemetryValue", telemetry); */
    return rooms;
}