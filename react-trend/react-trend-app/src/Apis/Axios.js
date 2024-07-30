import axios from "axios";

const cal = {
  TimeSeriesDaily: {
    "2024-07-30": {
      "1. open": "193.1800",
      "2. high": "193.2900",
      "3. low": "189.1800",
      "4. close": "191.5000",
      "5. volume": "3336806",
    },
    "2024-07-29": {
      "1. open": "193.1800",
      "2. high": "193.2900",
      "3. low": "189.1800",
      "4. close": "191.5000",
      "5. volume": "3336806",
    },
    "2024-07-26": {
      "1. open": "190.5100",
      "2. high": "193.5700",
      "3. low": "189.6220",
      "4. close": "191.7500",
      "5. volume": "4294875",
    },
    "2024-07-25": {
      "1. open": "186.8000",
      "2. high": "196.2600",
      "3. low": "185.3000",
      "4. close": "191.9800",
      "5. volume": "9532802",
    },
    "2024-07-24": {
      "1. open": "184.1400",
      "2. high": "185.0714",
      "3. low": "183.1450",
      "4. close": "184.0200",
      "5. volume": "6962071",
    },
    "2024-07-23": {
      "1. open": "184.3600",
      "2. high": "185.3800",
      "3. low": "183.0100",
      "4. close": "184.1000",
      "5. volume": "2180225",
    },
    "2024-07-22": {
      "1. open": "183.4000",
      "2. high": "184.9700",
      "3. low": "182.8600",
      "4. close": "184.1500",
      "5. volume": "2488525",
    },
    "2024-07-19": {
      "1. open": "186.3300",
      "2. high": "187.0000",
      "3. low": "181.9500",
      "4. close": "183.2500",
      "5. volume": "3816039",
    },
    "2024-07-18": {
      "1. open": "186.6400",
      "2. high": "189.4700",
      "3. low": "185.1000",
      "4. close": "185.2200",
      "5. volume": "3487808",
    },
    "2024-07-17": {
      "1. open": "185.4400",
      "2. high": "187.9400",
      "3. low": "185.0700",
      "4. close": "187.4500",
      "5. volume": "4225302",
    },
    "2024-07-16": {
      "1. open": "184.6700",
      "2. high": "186.6000",
      "3. low": "184.5200",
      "4. close": "185.8100",
      "5. volume": "3374526",
    },
    "2024-07-15": {
      "1. open": "183.3800",
      "2. high": "184.9000",
      "3. low": "182.6000",
      "4. close": "182.8800",
      "5. volume": "2925794",
    },
    "2024-07-12": {
      "1. open": "178.5600",
      "2. high": "184.1600",
      "3. low": "178.5000",
      "4. close": "182.8300",
      "5. volume": "4785565",
    },
    "2024-07-11": {
      "1. open": "177.6500",
      "2. high": "179.4400",
      "3. low": "176.6200",
      "4. close": "178.3100",
      "5. volume": "2807145",
    },
    "2024-07-10": {
      "1. open": "176.6000",
      "2. high": "178.2200",
      "3. low": "174.4500",
      "4. close": "177.8400",
      "5. volume": "3462182",
    },
    "2024-07-09": {
      "1. open": "177.6000",
      "2. high": "177.7000",
      "3. low": "175.5800",
      "4. close": "176.4800",
      "5. volume": "2513305",
    },
    "2024-07-08": {
      "1. open": "176.4100",
      "2. high": "178.5900",
      "3. low": "176.0100",
      "4. close": "177.6400",
      "5. volume": "2503038",
    },
    "2024-07-05": {
      "1. open": "175.7400",
      "2. high": "176.0900",
      "3. low": "173.9500",
      "4. close": "176.0200",
      "5. volume": "2085970",
    },
    "2024-07-03": {
      "1. open": "177.8800",
      "2. high": "177.9800",
      "3. low": "175.1700",
      "4. close": "175.7300",
      "5. volume": "1649049",
    },
    "2024-07-02": {
      "1. open": "174.8400",
      "2. high": "177.4850",
      "3. low": "174.3200",
      "4. close": "177.3000",
      "5. volume": "2883275",
    },
    "2024-07-01": {
      "1. open": "173.4500",
      "2. high": "176.4600",
      "3. low": "173.3800",
      "4. close": "175.1000",
      "5. volume": "3320961",
    },
  },
};

// const TOKEN = "cqej74hr01qm14qaj7i0cqej74hr01qm14qaj7ig";
const TOKEN = "KCHGV6EHEPQT7THI";

export default axios.create({
  baseURL: "https://www.alphavantage.co",
  params: { apikey: TOKEN },
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
  let x = [];
  const today = new Date().toISOString().slice(0, 10);
  let date = new Date(today).getTime() + dayChecker(today);
  for (let i = 0; i < 5; i++) {
    let time = new Date(date).toISOString().slice(0, 10);
    x.push({
      x: date,
      y: cal[time]["4. close"],
    });
    date = date - 1 * 24 * 60 * 60 * 1000;
    date = date + dayChecker(new Date(date));
  }
  // console.log(x);
  return x;
};

// dateLooper(cal);

export { dayChecker, dateLooper };
