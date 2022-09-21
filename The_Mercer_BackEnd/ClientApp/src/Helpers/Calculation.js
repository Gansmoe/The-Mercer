

export const MatchValues = (telemetry, rooms) => {
    // let object = {}

    // for (let room in rooms) {
    //     if (room.deviceid == Telemetry.deviceid) {
    //         object.push(room)
    //         object.push(Telemetry.value)
    //     }
    // }

  if (telemetry.length >= 1) {
      rooms.forEach(room => {
          if (telemetry[0].deviceId == room.tempDevice || room.humidDevice) {
              room.value = telemetry[0].value;

          }
      })
  }

    // console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJ!")

    // if (telemetry.length >= 1) {
    //     for (let i = 0; i < rooms.length; i++) {
    //         if (rooms[i].tempDevice || rooms[i].humidDevice == telemetry[0].deviceId) {
    //             rooms[i].value = telemetry[0].value
    //             console.log("i FOR loop Calculations", rooms[i]);
    //         }
    //     }
    // }

    console.log("testDataFörTelemetryValue", telemetry);
    return rooms;
}