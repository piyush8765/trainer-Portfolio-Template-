import { useState, useEffect } from "react";

const PersonalAssistant = ({
  trainerName,
  specialization,
  experience,
  studentsTrained,
  colleges,
  location,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  /* Initialize Welcome Message When Props Arrive */
  useEffect(() => {
    if (trainerName) {
      setMessages([
        {
          from: "ai",
          text: `Hi 👋 I’m ${trainerName}'s AI Training Assistant. Ask me about workshops, placements, experience or booking a session.`,
        },
      ]);
    }
  }, [trainerName]);

  /* 🔊 Text to Speech */
  const speak = (text) => {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  /* 🧠 TRAINER AI LOGIC */
  const generateReply = (question) => {
    const q = question.toLowerCase();

    if (["hi", "hello", "hey"].some((w) => q.includes(w)))
      return `Hello 👋 Welcome to ${trainerName}'s training portfolio.`;

    if (q.includes("about") || q.includes("who"))
      return `${trainerName} is a professional trainer specializing in ${specialization}, based in ${location}, with ${experience} of experience.`;

    if (q.includes("experience"))
      return `${trainerName} has ${experience} of experience and has trained ${studentsTrained} students across ${colleges} colleges.`;

    if (q.includes("workshop"))
      return `${trainerName} conducts workshops on resume building, mock interviews, group discussions, communication skills and personality development.`;

    if (q.includes("placement"))
      return `${trainerName} focuses on placement readiness including HR interviews, confidence building and industry exposure training.`;

    if (q.includes("book") || q.includes("session"))
      return `You can book a training session from the contact section below. ${trainerName} is open for college workshops and seminars.`;

    if (q.includes("thank"))
      return "You're most welcome 😊";

    return `You can ask about workshops, placement training, experience or booking a session.`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const replyText = generateReply(input);
    const aiMsg = { from: "ai", text: replyText };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
    speak(replyText);
  };

  return (
    <>
      <style>{`
        .ai-float-btn {
          position: fixed;
          bottom: 30px;
          right: 24px;
          z-index: 9999;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          cursor: pointer;
          overflow: hidden;
        }

        .ai-float-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .ai-chat {
          position: fixed;
          bottom: 110px;
          right: 24px;
          width: 360px;
          max-width: 90vw;
          background: #0F172A;
          border-radius: 20px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          overflow: hidden;
          z-index: 9999;
          color: white;
        }

        .ai-header {
          padding: 14px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          background: linear-gradient(90deg,#1E3A8A,#9333EA);
        }

        .ai-body {
          height: 260px;
          overflow-y: auto;
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 0.9rem;
        }

        .ai-msg {
          max-width: 80%;
          padding: 10px 12px;
          border-radius: 14px;
        }

        .ai-msg.user {
          align-self: flex-end;
          background: #22C55E;
          color: black;
        }

        .ai-msg.ai {
          align-self: flex-start;
          background: #1E293B;
          color: white;
        }

        .ai-input {
          display: flex;
          gap: 8px;
          padding: 12px;
          background: #111827;
        }

        .ai-input input {
          flex: 1;
          padding: 10px 12px;
          border-radius: 10px;
          background: #0F172A;
          border: 1px solid #334155;
          color: white;
          outline: none;
        }

        .ai-input button {
          padding: 10px 16px;
          border-radius: 10px;
          border: none;
          background: #9333EA;
          color: white;
          cursor: pointer;
          font-weight: 600;
        }
      `}</style>

      <div className="ai-float-btn" onClick={() => setIsOpen(!isOpen)}>
        <img src="/assistant.png" alt="AI Assistant" />
      </div>

      {isOpen && (
        <div className="ai-chat">
          <div className="ai-header">
            🎓 Training Assistant
            <span style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)}>
              ✕
            </span>
          </div>

          <div className="ai-body">
            {messages.map((msg, i) => (
              <div key={i} className={`ai-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="ai-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about workshops, placements..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalAssistant;