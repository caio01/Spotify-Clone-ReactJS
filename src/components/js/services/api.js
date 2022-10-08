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

export function deleteCollection(id) {
  axios({
    method: "DELETE",
    url: `https://api.baserow.io/api/database/rows/table/103740/${id}/`,
    headers: {
      Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh",
      "Content-Type": "application/json"
    }
  })
}

export function deletePlaylist(id) {
  axios({
    method: "DELETE",
    url: `https://api.baserow.io/api/database/rows/table/103741/${id}/`,
    headers: {
      Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh",
      "Content-Type": "application/json"
    }
  })
}

export function deleteMusic(id) {
  axios({
    method: "DELETE",
    url: `https://api.baserow.io/api/database/rows/table/103742/${id}/`,
    headers: {
      Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh",
      "Content-Type": "application/json"
    }
  })
}

export function updateCollection(id, data) {
  axios({
    method: "PATCH",
    url: `https://api.baserow.io/api/database/rows/table/103740/${id}/?user_field_names=true`,
    headers: {
      Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh",
      "Content-Type": "application/json"
    },
    data : data
  })
}

export function updatePlaylist(id, data) {
  axios({
    method: "PATCH",
    url: `https://api.baserow.io/api/database/rows/table/103741/${id}/?user_field_names=true`,
    headers: {
      Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh",
      "Content-Type": "application/json"
    },
    data : data
  })
}

export function updateMusic(id, data) {
  axios({
    method: "PATCH",
    url: `https://api.baserow.io/api/database/rows/table/103742/${id}/?user_field_names=true`,
    headers: {
      Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh",
      "Content-Type": "application/json"
    },
    data : data
  })
}