import React, { useState } from 'react';
import axios from 'axios';
import { FaPaperPlane } from 'react-icons/fa';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatSection = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      text: 'Hello! How can I assist you with gender-based violence (GBV) information?',
      sender: 'bot',
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function textGenTextOnlyPrompt() {
    
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GOOGLE_AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
    const prompt = "What is GBV?";
  
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    // [END text_gen_text_only_prompt]
  }
  


  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user's message to chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: 'user' },
    ]);
    setInput('');
    setLoading(true);

    try {
      // Call the textGenTextOnlyPrompt function with the user's input
      const aiResponse = await textGenTextOnlyPrompt(input);

      // Add bot's response to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: aiResponse, sender: 'bot' },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Gender-based violence (GBV) is a serious violation of human rights and a life-threatening health and protection issue. When people flee their homes, they are often at greater risk of physical, sexual and psychological violence, such as rape, sexual abuse, trafficking and forced prostitution.",
          sender: 'bot',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

//  const handleSend = async () => {
   // if (input.trim() === '') return;

    // Add user's message to chat
   // setMessages((prevMessages) => [
   //   ...prevMessages,
  //    { text: input, sender: 'user' },
   // ]);
    //setInput('');
   // setLoading(true);

    
     // try {
       // const response = await axios.post(
          //'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=REACT_APP_GOOGLE_AI_API_KEY', // Gemini API endpoint
         // { prompt: input },
         // {
            //headers: {
          //    Authorization: `Bearer ${process.env.REACT_APP_GOOGLE_AI_API_KEY}`, // Use API key from .env
           // },
            
        //  },
          //console.log("API Key:", process.env.REACT_APP_GOOGLE_AI_API_KEY)

       // );

     // const aiResponse = response.data.candidates[0].output;
       // Adjust based on the API's response structure
     // setMessages((prevMessages) => [
     //   ...prevMessages,
      //  { text: aiResponse, sender: 'bot' },
    //  ]);
   // } catch (error) {
    //  setMessages((prevMessages) => [
     //   ...prevMessages,
      //  {
         // text: "I'm sorry, something went wrong. Please try again.",
        //  sender: 'bot',
       // },
     // ]);
  //  } finally {
     // setLoading(false);
    //}
  //};

  return (
    <div className="bg-black text-white rounded-lg p-6 mt-10 max-w-lg mx-auto shadow-lg">
      <h2 className="text-2xl text-center text-orange-500 mb-4">
        Chat with Mizpa Support
      </h2>
      <div className="overflow-y-auto h-64 mb-4 p-4 bg-gray-800 rounded-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
          >
            <div
              className={`p-3 rounded-lg ${
                message.sender === 'user' ? 'bg-orange-700 text-white' : 'bg-gray-600 text-gray-100'
              } max-w-xs`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start mb-2">
            <div className="p-3 rounded-lg bg-gray-600 text-gray-100 max-w-xs">
              Typing...
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow p-2 rounded-l-md bg-gray-700 text-white outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="bg-orange-600 p-3 rounded-r-md text-white"
          disabled={loading}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
