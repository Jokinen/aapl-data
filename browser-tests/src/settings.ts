import * as dotenv from "dotenv";

dotenv.config();

const getEnvOrError = (key: string) => {
  const variable = process.env[key];

  if (!variable) {
    throw Error(`Environment variable ${key} not found`);
  }

  return variable;
};

export const url = () => getEnvOrError("BROWSER_TEST_URL");
