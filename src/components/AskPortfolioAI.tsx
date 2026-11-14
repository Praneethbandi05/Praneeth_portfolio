import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, Copy, Check, MessageSquare } from 'lucide-react';
import { AI_KNOWLEDGE_BASE, PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/sound';
import { useToast } from './Toast';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  isStreaming?: boolean;
}

export const AskPortfolioAI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `Hello! I am Bandi Praneeth's Portfolio AI Assistant. You can ask me anything about his AI/ML projects, AWS Cloud certifications, internship experiences at Gloom Dev and Swecha (IIIT Hyderabad), 600+ solved coding problems, or how to contact him!`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { showToast } = useToast();

  const suggestedQuestions = [
    "What are Praneeth's core AI/ML skills?",
    "Tell me about the Rythu Nestham project",
    "Explain his AWS certification & DevOps experience",
    "What did he build at Gloom Dev & Swecha?",
    "How can I contact or hire Praneeth?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const findBestAnswer = (userQuery: string): string => {
    const queryLower = userQuery.toLowerCase();

    // Check knowledge base
    let bestMatch: { score: number; answer: string } = { score: 0, answer: '' };

    for (const entry of AI_KNOWLEDGE_BASE) {
      let matches = 0;
      for (const kw of entry.keywords) {
        if (queryLower.includes(kw)) {
          matches++;
        }
      }
      if (matches > bestMatch.score) {
        bestMatch = { score: matches, answer: entry.answer };
      }
    }

    if (bestMatch.score > 0) {
      return bestMatch.answer;
    }

    // Default intelligent response summarizing Praneeth
    return `Bandi Praneeth is an AI & Machine Learning engineer pursuing his B.Tech at Vasireddy Venkatadri Institute of Technology (2023-2027) with an aggregate 7.3 SGPA. He is an AWS Certified Cloud Practitioner (CLF-C02), 1st place ACM Hackathon winner, and has solved 600+ coding challenges. He completed internships at Gloom Dev Pvt. Ltd. (Cloud & Full Stack), APSSDC (AWS Cloud & DevOps), and Swecha with IIIT Hyderabad (AI Agent Development). Feel free to ask about any specific project or reach him at bandipraneeth2005@gmail.com!`;
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    soundManager.playClick();
    setInput('');

    // Append user message
    const userMsgId = Math.random().toString();
    const assistantMsgId = Math.random().toString();

    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: 'user', text: query },
    ]);

    setIsTyping(true);

    const fullResponse = findBestAnswer(query);

    // Stream typewriter response
    let currentIdx = 0;
    const responseId = assistantMsgId;

    // Add empty streaming message first
    setMessages((prev) => [
      ...prev,
      { id: responseId, sender: 'assistant', text: '', isStreaming: true },
    ]);

    const streamInterval = setInterval(() => {
      currentIdx += 3; // stream 3 characters per step for snappy realistic pace
      if (currentIdx >= fullResponse.length) {
        clearInterval(streamInterval);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === responseId
              ? { ...m, text: fullResponse, isStreaming: false }
              : m
          )
        );
        setIsTyping(false);
      } else {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === responseId
              ? { ...m, text: fullResponse.slice(0, currentIdx) }
              : m
          )
        );
      }
    }, 20);
  };

  const handleCopy = (id: string, text: string) => {
    soundManager.playClick();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast('AI response copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReset = () => {
    soundManager.playClick();
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: `Chat restarted. Ask me any question about Bandi Praneeth's AI research, cloud architecture, projects, or background!`,
      },
    ]);
  };

  return (
    <section id="ai-chat" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
            <Bot className="w-4 h-4" />
            <span>08 // Interactive Agent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            Ask My Portfolio AI
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm leading-relaxed">
          Ground-truth interactive conversational agent trained on Bandi Praneeth's verified resume, project logs, and credentials.
        </p>
      </div>

      {/* Main Terminal Chat Interface */}
      <div className="rounded-3xl glass-panel border border-cyan-500/20 overflow-hidden shadow-2xl flex flex-col h-[600px] max-w-4xl mx-auto bg-[#090d16]">
        {/* Terminal Header */}
        <div className="px-6 py-3.5 bg-[#0c111e] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
              assistant@bandi-praneeth-ai:~
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
              <Sparkles className="w-3 h-3" /> Ready
            </span>
            <button
              onClick={handleReset}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Clear conversation"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
                  isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isUser
                      ? 'bg-cyan-500 text-slate-950 font-bold text-xs'
                      : 'bg-white/10 text-cyan-400 border border-cyan-500/30'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed relative group ${
                    isUser
                      ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none shadow-lg shadow-cyan-500/10'
                      : 'bg-[#101524] text-slate-200 border border-white/10 rounded-tl-none font-sans'
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.text}</div>
                  {msg.isStreaming && (
                    <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />
                  )}

                  {!isUser && msg.text && !msg.isStreaming && (
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="absolute top-2 right-2 p-1 text-slate-400 hover:text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Copy response"
                    >
                      {copiedId === msg.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompt Pills */}
        <div className="px-4 py-2 bg-[#080b13] border-t border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-mono text-slate-500 shrink-0">Try asking:</span>
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] font-mono whitespace-nowrap px-3 py-1 rounded-full bg-white/[0.03] hover:bg-cyan-500/10 text-slate-400 hover:text-cyan-300 border border-white/5 hover:border-cyan-500/30 transition-all shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-[#0a0e1a] border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask anything about Praneeth's AI projects, AWS skills, or education..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 font-sans"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
