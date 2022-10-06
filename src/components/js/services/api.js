import axios from 'axios';

export const getCollections = axios({
    method: "GET",
    url: "https://api.baserow.io/api/database/rows/table/103740/?user_field_names=true",
    headers: {
      Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh"
    }
  });

export const getPlaylists = axios({
  method: "GET",
  url: "https://api.baserow.io/api/database/rows/table/103741/?user_field_names=true",
  headers: {
    Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh"
  }
});

export const getMusics = axios({
  method: "GET",
  url: "https://api.baserow.io/api/database/rows/table/103742/?user_field_names=true&size=200",
  headers: {
    Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh"
  }
});

export const getUser = axios({
  method: "GET",
  url: "https://api.baserow.io/api/database/rows/table/103692/?user_field_names=true",
  headers: {
    Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh"
  }
});

export function postUser(data) {
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