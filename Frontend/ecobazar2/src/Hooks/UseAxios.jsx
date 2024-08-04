import React, { useState } from "react";
import axios from "axios";

function UseAxios() {
  
  const fetchurl = async (url, method, requestData = {}, headers = {}) => {
    try {
      const response = await axios({
        url: url,
        method: method,
        data: requestData,
        headers: headers,
      })
      return response;
    } catch (error) {
        console.log(error);
        return error.response;
    }
  };
  return { fetchurl };
}

export default UseAxios;
