import React from 'react';

interface MessageProps {
  message: {
    id: string;
    content: string;
    sender: 'user' | 'ai';
    timestamp: Date;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} message`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isUser
            ? 'bg-blue-500 text-white rounded-bl-none'
            : 'bg-gray-200 text-gray-900 rounded-tl-none'
        }`}
      >
        <p className="break-words">{message.content}</p>
        <span
          className={`text-xs mt-1 block ${
            isUser ? 'text-blue-100' : 'text-gray-500'
          }`}
        >
          {message.timestamp.toLocaleTimeString('ar-SA')}
        </span>
      </div>
    </div>
  );
};

export default Message;