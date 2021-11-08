const dev = {
  API_ENDPOINT_URL: "http://192.168.10.62:8001/",
};

const prod = {
  API_ENDPOINT_URL: "http://api.ortakmarket.com/",
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    default:
      break;
  }
};

export const env = getEnv();
