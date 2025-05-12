import { environment as qaEnvironment } from './qa';
import { environment as uatEnvironment } from './uat';

//Utility function to dynamicaaly load the appropriate configuration based on the environment.
export function loadEnvironmentConfig() {
  const ENV = process.env.ENV || 'qa'; // Default to 'qa' if ENV is not set
  switch (ENV.toLowerCase()) {
    case 'qa':
      return qaEnvironment;
    case 'uat':
      return uatEnvironment;
    default:
      throw new Error(`Unknown environment: ${ENV}`);
  }
}
