import axios from "axios"

const BaseUrl = "https://localhost:5001/api" 
const BaseUrlSmartHut = "https://smarthut.azurewebsites.net/api" 

export const AuthenticateRequest = async () => {
  try {
    const { data } = await axios.get(`${BaseUrl}/user`)
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export const HandshakeRequest = async (mail) => {
try {
  const { data } = await axios.get(`${BaseUrlSmartHut}/negotiate`, {
    headers: {
      'X-MS-SIGNALR-USERID': mail
    }
  });
  return [data, null];
} catch (error) {
  return [null, error];
}
}