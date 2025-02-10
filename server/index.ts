import express from 'express';
import db from './db';

const app = express();
app.use(express.json());

// Enable CORS for the frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT');
  next();
});

// Get all messages
app.get('/api/messages', (req, res) => {
  try {
    const messages = db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all();
    res.json({ success: true, messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch messages' });
  }
});

// Mark message as read
app.put('/api/messages/:id/read', (req, res) => {
  try {
    const { id } = req.params;
    const stmt = db.prepare('UPDATE messages SET read = 1 WHERE id = ?');
    stmt.run(id);
    res.json({ success: true });
  } catch (error) {
    console.error('Error updating message:', error);
    res.status(500).json({ success: false, error: 'Failed to update message' });
  }
});

// Save message endpoint
app.post('/api/messages', (req, res) => {
  try {
    const { name, email, message } = req.body;

    const stmt = db.prepare(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)'
    );
    const result = stmt.run(name, email, message);

    res.json({ 
      success: true, 
      id: result.lastInsertRowid 
    });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to save message' 
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});