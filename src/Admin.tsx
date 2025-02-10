import React, { useState, useEffect } from 'react';
import { Mail, MailOpen, Trash2 } from 'lucide-react';

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
  read: boolean;
};

export function Admin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/messages');
      const data = await response.json();
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const markAsRead = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/api/messages/${id}/read`, {
        method: 'PUT'
      });
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, read: true } : msg
      ));
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    if (!message.read) {
      markAsRead(message.id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Message Inbox</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 min-h-[600px]">
            {/* Message List */}
            <div className="border-r border-gray-200 dark:border-gray-700">
              <div className="overflow-y-auto h-[600px]">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => handleMessageClick(message)}
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      selectedMessage?.id === message.id ? 'bg-blue-50 dark:bg-blue-900' : ''
                    } ${!message.read ? 'font-semibold' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      {message.read ? (
                        <MailOpen className="w-5 h-5 text-gray-400" />
                      ) : (
                        <Mail className="w-5 h-5 text-blue-500" />
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{message.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{message.message}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          {new Date(message.created_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Content */}
            <div className="col-span-2 p-6">
              {selectedMessage ? (
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        From: {selectedMessage.name}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email: {selectedMessage.email}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Sent: {new Date(selectedMessage.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                      {selectedMessage.message}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  Select a message to read
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}