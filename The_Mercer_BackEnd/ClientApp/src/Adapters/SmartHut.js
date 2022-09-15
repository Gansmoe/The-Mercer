import axios from "axios";

const BaseUrlSmartHut = "https://api.smarthut.se/"
const BaseUrlSmartHutAzure = "https://smarthut.azurewebsites.net/api/"
const authToken = localStorage.getItem("AuthenticateToken");
const smartHutAuthToken = localStorage.getItem("SmartHutToken");

export const GetBuildings = async () => {

    console.log(authToken);
    try {
        const { data } = await axios.get(`${BaseUrlSmartHut}BuildingInfo/GetMyBuilding`, {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        });
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}


export const GetDevices = async () => {
    console.log(authToken);
    try {
        const { data } = await axios.get(`${BaseUrlSmartHut}BuildingInfo/9eee90c3-55cb-48a1-8aa7-13b7083f2b6f/true`, {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Authorization': 'Bearer ' + authToken
            }
        });
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}

export const RestoreAlarm = async (id) => {
    const user = localStorage.getItem("Mail");

    try {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + smartHutAuthToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "deviceId": id,
            "userName": user
        });


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BaseUrlSmartHutAzure}restorealarm`, requestOptions)
            .then(response => response.text())
            .then(result => console.log("ok", result))
            .catch(error => console.log('error', error));
    } catch (error) {
        console.log(error);
    }

}