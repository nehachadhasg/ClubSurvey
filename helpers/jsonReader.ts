import * as fs from 'fs';
import * as path from 'path';

export class JsonReader {
    /**
     * Reads a JSON file dynamically and parses its content.
     * @param fileName - The name or relative path of the JSON file.
     * @param basePath - The base directory (default is `__dirname`).
     * @returns The parsed JSON object or null if an error occurs.
     */
    static readJson(fileName: string, basePath: string = __dirname): Record<string, any> | null {
   //     const filePath = path.join(basePath, fileName); // Construct the full file path
        try {
            const fileContent = fs.readFileSync(fileName, 'utf-8'); // Read file as UTF-8 string
            return JSON.parse(fileContent); // Parse and return JSON object
        } catch (error) {
            console.error(`Error reading or parsing the file: ${fileName}`, error);
            return null;
        }
    }
        /**
     * Fetches user credentials based on the role from the users.json file.
     * @param roleId - The role ID to fetch user credentials for.
     * @param fileName - The name or relative path of the JSON file.
     * @param basePath - The base directory (default is `__dirname`).
     * @returns The user credentials object or null if not found.
     */
    static getUserByRole(roleId: number, fileName: string, basePath: string = __dirname): Record<string, any> | null {
        const users = this.readJson(fileName, basePath); // Read the JSON file
        if (!users) {
            console.error('Failed to read users.json or file is empty.');
            return null;
        }

        const user = users[roleId]; // Fetch user by role ID
        if (!user) {
            console.error(`No user found for role ID: ${roleId}`);
            return null;
        }

        return user; // Return the user credentials
    }
}
    