

export const MatchValues = (telemetry, rooms, range, units) => {
    
     if (!telemetry) {
         return rooms; //Om ingen data finns sluta parsa
     }

    for (let k = 0; k < telemetry.length; k++) { //Loppa igenom samtliga telemetry meddelanden
        var valueType; //Tom variabel som används i case

        for (let i = 0; i < rooms.length; i++) { //Loopar igenom samtliga rum

            switch (telemetry[k].deviceId) { //Om telemetry deviceId matchar mot ett av rummen i case
                case rooms[i].tempDevice:
                    valueType = "tempValue"; //Ange valuetype till tempValue
                    break;

                case rooms[i].humidDevice:
                    valueType = "humidValue"; //Ange valuetype till humidValue
                    break;
            }

            if (valueType) { //Om vi får en träff i switchen så tilldelas valueType tempValue eller humidValue
                rooms[i] = updateTelemetryValue(valueType, rooms[i], telemetry[k], range, units); //Skapat en ny metod
                break;
            }
        }
    }
    
    return rooms;
}

const updateTelemetryValue = (type, room, telemetry, ranges, units) => {
    //Deklarerar variabler för switch som används längre ner.
    var propertyName;
    var deviceName;
    var alarmName;
    var unitName;

    switch (type) {
        case "tempValue": //Om type är tempValue
            propertyName = "tempValue"; //Anger våra "muterade objekt" till de tomma variablarna
            deviceName = "tempDevice";
            alarmName = "tempAlarm";
            unitName = "tempUnit";
        break;

        case "humidValue": //Om type är humidValue
            propertyName = "humidValue"; //Anger våra "muterade objekt" till de tomma variablarna
            deviceName = "humidDevice";
            alarmName = "humidAlarm";
            unitName = "humidUnit";
        break;
    }

    room[propertyName] = Math.round(telemetry.value); //room[humidValue] eller room[tempValue] från caset
    room.time = new Date(telemetry.time * 1000).toLocaleTimeString(); //Anger tid

    var range = ranges.find(x => x.id == room[deviceName].toLowerCase()); //Tar array range, tar första matchningen mot id i range mot room[humidDevice] eller room[tempDevice] och sparar ner i range
    
    room[unitName] = units.find(x => x.id == range.unitId).unit; //skapar ett "muterad objekt" med humidUnit eller tempUnit, letar fram första i units som matchar mot range.unitId och sedan .unit för att få fram temp eller humid

    if (room[propertyName] > range.maxValue || //Samma check som innan men i stället för if / else if så kör jag en ||
        room[propertyName] < range.minValue) {

        room[alarmName] = true;
    }
    return room;
}



export const countArray = (array) => {
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        counter++
    }

    return counter;
}


export const ChangeTempBool = (rooms, id) => {
    
    var room = rooms.find(x => x.roomId == id);
    room.tempAlarm = false;
   
    return rooms;
}

export const ChangeHumidBool = (rooms, id) => {

    var room = rooms.find(x => x.roomId == id);
    room.humidAlarm = false;
    
    return rooms;
}

