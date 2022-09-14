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