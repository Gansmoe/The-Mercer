import axios from "axios";

const BaseUrl = "https://localhost:5001/api/"

export const getRoomsFromDatabase = async () => {

    try {
        const { data } = await axios.get(`${BaseUrl}Room`);
        return [data, null]

    } catch (error) {
        return [null, error]
    }
}

export const postAlarmToDatabase = async (Alarm) => {
    try {
        axios.post(`${BaseUrl}Alarm/create`, Alarm, {
            headers: {
                'Content-type': 'application/json'
            }
        })
    } catch (error) {
        console.log(error);
    }
}


export const getAlarmHistory = async () => {

    try {
        const { data } = await axios.get(`${BaseUrl}alarm/getalarms`);
        return [data, null]

    } catch (error) {
        return [null, error]
    }
}

export const getAlarmHistoryPerRoom = async (id) => {
    try {
        const { data } = await axios.get(`${BaseUrl}alarm/${id}`)
        return [data, null]
    } catch (error) {
        return [null, error]
    }
}