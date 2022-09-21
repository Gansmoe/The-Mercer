


/* export const getTempData = (callbacks) => {

    const devices = [
        { id: 'A', value: 0 },
        { id: 'B', value: 0 },
        { id: 'C', value: 0 },
        { id: 'D', value: 0 },
    ];

    let newValue = Math.random(1000);
    const result = { id: 'A', value: newValue};
    console.log(result);
    callbacks.telemetryMsg(result);
} */

export const getTempData = (callbacks) => {

    setTimeout(() => {

/*     const TempData = (callbacks) => { */

        const devices = [
            { humidDevice: '', tempDevice: '2ecf8aef-bd10-4a53-af03-558ef550f8f7' },
            { humidDevice: '896c6582-9e0d-44ee-97c5-a69fb7e68ca2', tempDevice: 'a115f84c-7e7e-4a7e-a982-0d984788f8c7'},
            { humidDevice: 'a2bd8fef-e680-43db-bd29-54b3cb2284e7', tempDevice: '702cd343-b9a4-4a15-bd2c-e5624e71423f'},
            { humidDevice: '', tempDevice: '4b2415da-c41d-435d-acdb-ef303383668b'},
        ];

        const pickDevice = Math.floor(Math.random() * 4);;
        console.log(pickDevice);
        let newValue = Math.random(1000);
        const result = { id: devices[pickDevice], value: newValue };
/*         console.log(result); */
        callbacks.telemetryMsg(result);
/*     } */
    
    }, 5000);


}
