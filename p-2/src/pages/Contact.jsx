import { useState, useEffect } from 'react';

const STORAGE_KEY = 'contactMessage';

function Contact() {
  const [message, setMessage] = useState('');
  const [savedMessage, setSavedMessage] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setMessage(stored);
      setSavedMessage(stored);
    }
  }, []);

  const handleSend = () => {
    localStorage.setItem(STORAGE_KEY, message);
    setSavedMessage(message);
    setStatus('Message saved successfully.');

    window.setTimeout(() => {
      setStatus('');
    }, 2500);
  };

  return (
    <section>
      <h1>Contact</h1>
      <label htmlFor="contact-message">Message</label>
      <input
        id="contact-message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <p>Character count: {message.length}</p>
      <button type="button" onClick={handleSend} disabled={!message.trim()}>
        Send
      </button>
      {status && <p className="status">{status}</p>}
      {savedMessage && (
        <p className="saved-message">Last sent message: {savedMessage}</p>
      )}
      <button type="button" onClick={() => setShowHelp((prev) => !prev)}>
        {showHelp ? 'Hide help' : 'Show help'}
      </button>
      {showHelp && (
        <div className="help-box">
          Use this form to send a short message. The input is controlled with useState and saved to local storage.
        </div>
      )}
    </section>
  );
}

export default Contact;
