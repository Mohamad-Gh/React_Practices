import axios from "axios";

// const TOKEN = "cqej74hr01qm14qaj7i0cqej74hr01qm14qaj7ig";
const TOKEN = "KCHGV6EHEPQT7THI";

export default axios.create({
  baseURL: "https://www.alphavantage.co",
  params: { apikey: TOKEN },
});
