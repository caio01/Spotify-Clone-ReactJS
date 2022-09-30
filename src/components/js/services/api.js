import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gist.githubusercontent.com/caio01/0203fac18d47f333f749c49df124702e/raw/180d734fa0ffbeb9e56930990beb558bea089275/data.json'
});

export function post(data) {
    axios({
            method: "POST",
            url: "https://api.baserow.io/api/database/rows/table/103692/?user_field_names=true",
            headers: {
                Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh",
                "Content-Type": "application/json"
            },
            data : data
        })
}

export function get() {
    axios({
        method: "GET",
        url: "https://api.baserow.io/api/database/rows/table/103692/?user_field_names=true",
        headers: {
          Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh"
        }
      })
}

export default api;