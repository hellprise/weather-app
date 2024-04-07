import axios from "axios"

import { API_URL } from "../config/api.config"

import { getContentType } from "./api.helper"

const axiosOptions = {
	baseURL: API_URL,
	headers: getContentType()
}

export const axiosClassic = axios.create(axiosOptions)
