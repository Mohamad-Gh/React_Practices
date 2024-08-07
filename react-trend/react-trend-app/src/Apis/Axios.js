import axios from "axios";

// const TOKEN = "cqej74hr01qm14qaj7i0cqej74hr01qm14qaj7ig";
const TOKEN = "KCHGV6EHEPQT7THI";
const AnotherToken = "U87D5SIA1CAUK9GR";

export default axios.create({
  baseURL: "https://www.alphavantage.co",
  params: { apikey: AnotherToken },
});

const dayChecker = (day) => {
  const ourDay = new Date(day).getDay();
  let difference = null;
  if (ourDay == 6) {
    difference = -2 * 24 * 60 * 60 * 1000;
  } else if (ourDay == 5) {
    difference = -1 * 24 * 60 * 60 * 1000;
  } else {
    difference = 0;
  }
  return difference;
};

const dateLooper = (cal) => {
  let dataForChart = [];
  const today = new Date().toISOString().slice(0, 10);
  let date = new Date(today).getTime() + dayChecker(today);
  for (let i = 0; i < 22; ) {
    let time = new Date(date).toISOString().slice(0, 10);
    if (!cal[time]) {
      date = date - 1 * 24 * 60 * 60 * 1000;
      date = date + dayChecker(new Date(date));
    } else {
      i++;
      dataForChart = [
        {
          x: new Date(date).toISOString().slice(0, 10),
          y: [
            // cal[time]["1. open"],
            // cal[time]["2. high"],
            // cal[time]["3. low"],
            cal[time]["4. close"],
          ],
        },
        ...dataForChart,
      ];
    }

    date = date - 1 * 24 * 60 * 60 * 1000;
    date = date + dayChecker(new Date(date));
  }
  // console.log(dataForChart);
  return dataForChart;
};

export { dayChecker, dateLooper };
