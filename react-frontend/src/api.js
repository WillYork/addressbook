import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080/api"
  // baseURL: "https://idoladdressbook.herokuapp.com/api"
});

export const getAddresses = () => {
  return request.get("/addresses");
};

export const getAddressById = (id) => {
  return request.get(`/address/${id}`)
}

export const postAddress = (forename, surname, address, postcode, telephone, email, date_of_birth) => {
  return request.post(`/addresses`, {forename, surname, address, postcode, telephone, email, date_of_birth})
}

export const deleteAddress = (id) => {
  return request.delete(`/address/${id}`)
}