import Database from 'better-sqlite3';
import { join } from 'path';

const db = new Database(join(process.cwd(), 'messages.db'));

// Create messages table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    read BOOLEAN DEFAULT 0
  )
`);

export default db;