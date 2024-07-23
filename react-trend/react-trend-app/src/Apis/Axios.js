import axios from "axios";

const TOKEN = "cqej74hr01qm14qaj7i0cqej74hr01qm14qaj7ig";
export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: { token: TOKEN },
});
