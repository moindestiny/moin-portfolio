"use client"
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';
import { ChatMessage, MessageRole } from '@/lib/types';
import clsx from 'clsx';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: MessageRole.MODEL, text: "Hi! I'm Moin's virtual assistant. Feel free to leave a message!" }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isThinking) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: MessageRole.USER,
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    // MOCK RESPONSE (No AI)
    // In a real app, you might send this to an email service or Discord webhook
    setTimeout(() => {
      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: MessageRole.MODEL,
        text: `Thanks for reaching out! I don't have the ability to respond in real time, so I can't actually answer, but you can email me at moinahmaddev@gmail.com.`
      };
      
      setMessages(prev => [...prev, modelMsg]);
      setIsThinking(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-96 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] transition-all animate-in slide-in-from-bottom-5 fade-in duration-200">
          {/* Header */}
          <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-teal-500/10 rounded-lg">
                <Sparkles className="w-4 h-4 text-teal-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Contact Me</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Leave a message</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md text-zinc-500 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-zinc-900/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={clsx(
                  "flex gap-3 text-sm max-w-[85%]",
                  msg.role === MessageRole.USER ? "ml-auto flex-row-reverse" : ""
                )}
              >
                <div className={clsx(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                  msg.role === MessageRole.USER 
                    ? "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700" 
                    : "bg-teal-50 dark:bg-teal-900/20 border-teal-100 dark:border-teal-900/50"
                )}>
                  {msg.role === MessageRole.USER ? <User size={14} className="text-zinc-600 dark:text-zinc-300" /> : <Bot size={14} className="text-teal-600 dark:text-teal-400" />}
                </div>
                <div className={clsx(
                  "p-3 rounded-2xl leading-relaxed shadow-sm",
                  msg.role === MessageRole.USER 
                    ? "bg-zinc-800 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-tr-none" 
                    : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 rounded-tl-none border border-zinc-200 dark:border-zinc-700/50"
                )}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex gap-3 max-w-[85%]">
                 <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center border border-teal-100 dark:border-teal-900/50">
                    <Bot size={14} className="text-teal-600 dark:text-teal-400" />
                 </div>
                 <div className="bg-zinc-100 dark:bg-zinc-800/80 p-3 rounded-2xl rounded-tl-none border border-zinc-200 dark:border-zinc-700/50 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Say hello..."
                className="w-full bg-zinc-100 dark:bg-zinc-800/50 border-none rounded-full py-2.5 pl-4 pr-12 text-sm text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-teal-500/50 placeholder-zinc-500 dark:placeholder-zinc-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isThinking}
                className="absolute right-1.5 p-1.5 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-linear-to-tr from-teal-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? (
          <X className="text-zinc-600 dark:text-zinc-300 relative z-10" />
        ) : (
          <Sparkles className="text-teal-500 dark:text-teal-400 relative z-10" />
        )}
      </button>
    </div>
  );
};