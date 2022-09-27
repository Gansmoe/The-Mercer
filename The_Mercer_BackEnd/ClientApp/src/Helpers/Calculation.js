

export const MatchValues = (telemetry, rooms, range, units) => {

    if (telemetry.length >= 1) {

        for (let i = 0; i < rooms.length; i++) {

            if (telemetry[0].deviceId === rooms[i].tempDevice) {
                rooms[i].tempValue = Math.round(telemetry[0].value);
                rooms[i].time = new Date(telemetry[0].time * 1000).toLocaleTimeString();
                
                for (let y = 0; y < range.length; y++) {
                    
                    for (let x = 0; x < units.length; x++){

                        if (range[y].id === rooms[i].tempDevice.toLowerCase() && range[y].unitId === units[x].id) {
                            rooms[i].tempUnit = units[x].unit;

                            if (rooms[i].tempValue > range[y].maxValue) {
    
                                rooms[i].tempAlarm = true;
    
                            } else if (rooms[i].tempValue < range[y].minValue) {
    
                                rooms[i].tempAlarm = true;
    
                            }
                        }
                    }

                    
                }
                return rooms;
            }
            else if (telemetry[0].deviceId === rooms[i].humidDevice) {

                rooms[i].humidValue = Math.round(telemetry[0].value);
                rooms[i].time = new Date(telemetry[0].time * 1000).toLocaleTimeString();

                for (let y = 0; y < range.length; y++) {

                    for (let x = 0; x < units.length; x++) {

                        if (range[y].id === rooms[i].humidDevice.toLowerCase() && range[y].unitId === units[x].id) {
                            rooms[i].humidUnit = units[x].unit;
                            if (rooms[i].humidValue > range[y].maxValue) {
    
                                rooms[i].humidAlarm = true;
    
                            } else if (rooms[i].humidValue < range[y].minValue) {
    
                                rooms[i].humidAlarm = true;
    
                            }
                        }
                    }

                    

                }
                return rooms;
            }
        }
    }

    return rooms;
}




export const countArray = (array) => {
    let counter = 0;
    
    for (let i = 0; i < array.length; i++) {
        counter++
    }

    return counter;
}


export const ChangeTempBool = (rooms, id) => {
    
    for (let i = 0; i < rooms.length; i++) {

        if (rooms[i].roomId === id) {

            rooms[i].tempAlarm = false;
        }
    }
    return rooms;
}

export const ChangeHumidBool = (rooms, id) => {
    
    for (let i = 0; i < rooms.length; i++) {

        if (rooms[i].roomId === id) {
       
            rooms[i].humidAlarm = false;
        }
    }
    return rooms;
}


export const MatchUnit = (rooms, units) => {
    console.log(rooms);
    console.log(units);
}