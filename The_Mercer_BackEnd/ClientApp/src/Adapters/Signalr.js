import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

export const OpenSignalRConnection = async (telemetryMsg) => {
    try {
        
        //Hämta ut URL + token från LocalStorage
        let token = localStorage.getItem("SmartHutToken");
        let url = localStorage.getItem("SmartHutUrl");

        //Skapa anslutningen (En del av nedan kommentarer är från Microsofts dokumentation)
        const connection = new HubConnectionBuilder()
            .withUrl(url, {
                accessTokenFactory: () => token //In the JavaScript client, the access token is configured by setting the accessTokenFactory field on the options object in withUrl:
            })
            .configureLogging(LogLevel.Information) //signalR.LogLevel.Information: Status messages without errors. Logs Information, Warning, and Error messages. Loggas till console
            .build(); //Bygg 
            
            
            connection.on(telemetryMsg, data => {
                console.log(data);
                return data;
            })

            await connection.start();
            

    } catch (e) {
        console.log("SignalR error: ", e);
    }
}