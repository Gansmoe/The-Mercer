import axios from "axios";

const BaseUrlSmartHut = "https://api.smarthut.se/" 

export const GetBuildings = async () => {
    const authToken = localStorage.getItem("AuthenticateToken");
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