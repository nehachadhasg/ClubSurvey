//Utility function to dynamicaaly load the appropriate configuration based on the environment.
export function loadEnvironmentConfig() {
    const ENV = process.env.ENV || 'qa'; // Default to 'qa' if ENV is not set
    try {
    const { environment } = require(`./${ENV}`);
    return environment;
  } catch (error) {
    throw new Error(`Environment configuration for '${ENV}' not found. Ensure the file exists in the config folder.`);
  }
}