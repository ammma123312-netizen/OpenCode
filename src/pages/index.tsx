import React, { useState, useEffect, useRef } from 'react';
import ChatInterface from '@/components/ChatInterface';
import { useSocket } from '@/hooks/useSocket';

export default function Home() {
  return (
    <div className="chat-container">
      <ChatInterface />
    </div>
  );
}