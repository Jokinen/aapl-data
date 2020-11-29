import dotenv from "dotenv";

// If we are in development mode, read env from dotenv files. Otherwise
// rely on the environment being set.
if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

function getEnvOrError(variableName: string): string {
  const variable = process.env[variableName];

  if (!variable) {
    throw Error(`Could not find ${variableName}`);
  }

  return variable;
}

export default {
  port: getEnvOrError("PORT"),
  alphaVantageApiKey: getEnvOrError("ALPHA_VANTAGE_API_KEY"),
  alphaVantageApiUrl: getEnvOrError("ALPHA_VANTAGE_API_URL"),
};
