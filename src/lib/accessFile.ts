"use server"

import fs from 'fs/promises';

export async function writeFile(filePath:string, content:string) {
    try {
    
        const data = await fs.writeFile(filePath, content, 'utf-8');

        // console.log('File has been written successfully.');

        return content
    
      } catch (error) {
        console.error('Error writing file:', error);
      }
}

export async function readFile(filePath:string) {
    try {
        const content = 'Hello World.';
    
        const data = await fs.readFile(filePath, 'utf-8');

        return data
    
      } catch (error) {
        console.error('Error writing file:', error);
      }
}