import axios from "axios"


export const HandlePostApi = async (data, url) => {
    // console.log(data)
    // console.log(url,'000000000')
    config = {
        method: 'POST',
        data: data,
        url: url,
        header: {
            'content-type': 'application/json'
        }
    }
    const response = await axios(config)
    console.log(response?.data?.code, '0000000000000000000000000')
    return response
}