import { useContext, useEffect, useRef, useState } from "react"
import {
  FaPaperPlane,
  FaRobot,
  FaUserCircle,
  FaBars,
  FaPlus,
  FaTrash,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa"

import { signOut } from "firebase/auth"
import { auth } from "./firebaseConfig"
import { AuthContext } from "../context/AuthContext"

export default function Chat() {

  const { currentUser } = useContext(AuthContext)

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const [chats, setChats] = useState([])
  const [currentChatId, setCurrentChatId] = useState(null)

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello 👋 I am Chattrix. How can I help you today?",
    },
  ])

  const messagesEndRef = useRef(null)

  // Auto Scroll

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    })

  }, [messages])

  // Load Chats

  useEffect(() => {

    if (currentUser) {
      fetchChats()
    }

  }, [currentUser])

  // Fetch Chats

  const fetchChats = async () => {

    try {

      const response = await fetch(
        `${import.meta.env.BASE_URL}/api/chats/${currentUser.uid}`
      )

      const data = await response.json()

      setChats(data)

    } catch (error) {

      console.log(error)

    }

  }

  // Create New Chat

  const createNewChat = async () => {

    try {

      const response = await fetch(
        "http://localhost:3000/api/chats/new",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            userId: currentUser.uid,
          }),
        }
      )

      const data = await response.json()

      setCurrentChatId(data._id)

      setMessages([
        {
          role: "assistant",
          text: "New chat started 👋",
        },
      ])

      fetchChats()

      setSidebarOpen(false)

    } catch (error) {

      console.log(error)

    }

  }

  // Open Old Chat

  const openChat = (chat) => {

    setCurrentChatId(chat._id)

    setMessages(chat.messages)

    setSidebarOpen(false)

  }

  // Send Message

  const handleSend = async () => {

    if (!message.trim()) return

    let chatId = currentChatId

    if (!chatId) {

      try {

        const response = await fetch(
          "http://localhost:3000/api/chats/new",
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              userId: currentUser.uid,
            }),
          }
        )

        const data = await response.json()

        chatId = data._id

        setCurrentChatId(chatId)

        fetchChats()

      } catch (error) {

        console.log(error)

      }

    }

    const userMessage = {
      role: "user",
      text: message,
    }

    const updatedMessages = [...messages, userMessage]

    setMessages(updatedMessages)

    const currentMessage = message

    setMessage("")

    setLoading(true)

    try {

      const response = await fetch(
        "http://localhost:3000/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: currentMessage,
            chatId,
          }),
        }
      )

      const data = await response.json()

      const aiMessage = {
        role: "assistant",
        text: data.reply || "No response from AI",
      }

      const finalMessages = [...updatedMessages, aiMessage]

      setMessages(finalMessages)

      await fetch(
        `http://localhost:3000/api/chats/${chatId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            messages: finalMessages,
          }),
        }
      )

      fetchChats()

    } catch (error) {

      console.log(error)

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong.",
        },
      ])

    }

    setLoading(false)

  }

  // Enter Key

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {
      handleSend()
    }

  }

  // Delete Chat

  const deleteChat = async (chatId) => {

    try {

      await fetch(
        `http://localhost:3000/api/chats/${chatId}`,
        {
          method: "DELETE",
        }
      )

      setChats((prev) =>
        prev.filter((chat) => chat._id !== chatId)
      )

      if (currentChatId === chatId) {

        setCurrentChatId(null)

        setMessages([
          {
            role: "assistant",
            text: "Chat deleted successfully.",
          },
        ])

      }

    } catch (error) {

      console.log(error)

    }

  }

  // Logout

  const handleLogout = async () => {

    try {

      await signOut(auth)

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="h-screen bg-black text-white flex overflow-hidden relative">

      {/* Mobile Overlay */}

      {sidebarOpen && (

        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        ></div>

      )}

      {/* Sidebar */}

      <div
        className={`
          fixed lg:static z-50 top-0 left-0 h-full
          w-[280px] bg-[#111111] border-r border-[#232323]
          transition-all duration-300 flex flex-col
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >

        {/* Top */}

        <div className="flex items-center justify-between p-5 border-b border-[#232323]">

          <div className="flex items-center gap-3">

            <div className="bg-purple-600 p-3 rounded-xl">
              <FaRobot />
            </div>

            <h1 className="text-[24px] font-bold">
              Chattrix
            </h1>

          </div>

          {/* Close */}

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >

            <FaTimes className="text-[#9A9A9A]" />

          </button>

        </div>

        {/* New Chat */}

        <div className="p-4">

          <button
            onClick={createNewChat}
            className="w-full bg-purple-600 hover:bg-purple-700 transition py-3 rounded-xl flex items-center justify-center gap-2 font-medium cursor-pointer"
          >

            <FaPlus />

            New Chat

          </button>

        </div>

        {/* Chats */}

        <div className="flex-1 px-3 overflow-y-auto">

          {chats.map((chat) => (

            <div
              key={chat._id}
              className="bg-[#1A1A1A] hover:bg-[#222222] transition p-4 rounded-xl mb-3 cursor-pointer group"
            >

              <div className="flex items-start justify-between">

                <div
                  className="flex-1"
                  onClick={() => openChat(chat)}
                >

                  <h2 className="font-medium text-sm truncate">
                    {chat.title || "New Chat"}
                  </h2>

                </div>

                <button
                  onClick={() => deleteChat(chat._id)}
                  className="opacity-0 group-hover:opacity-100 transition text-red-400 hover:text-red-500"
                >

                  <FaTrash />

                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom */}

        <div className="border-t border-[#232323] p-4 space-y-3">

          {/* User */}

          <div className="bg-[#1A1A1A] p-3 rounded-xl flex items-center gap-3">

            <FaUserCircle className="text-[35px] text-purple-500" />

            <div>

              <h2 className="text-sm font-medium truncate max-w-[150px]">
                {currentUser?.email}
              </h2>

              <p className="text-xs text-[#8A8A8A]">
                Online
              </p>

            </div>

          </div>

          {/* Sign Out */}

          <button
            onClick={handleLogout}
            className="w-full bg-[#1A1A1A] hover:bg-[#232323] transition p-3 rounded-xl flex items-center justify-center gap-2 text-red-400 cursor-pointer"
          >

            <FaSignOutAlt />

            Sign Out

          </button>

        </div>

      </div>

      {/* Main Chat */}

      <div className="flex-1 flex flex-col bg-[#090909] w-full">

        {/* Navbar */}

        <div className="border-b border-[#1F1F1F] px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">

            {/* Mobile Menu */}

            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >

              <FaBars className="text-[18px]" />

            </button>

            <h1 className="text-[20px] sm:text-[24px] font-bold">
              Chattrix AI
            </h1>

          </div>

        </div>

        {/* Messages */}

        <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-6 space-y-6">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[95%] sm:max-w-[80%] lg:max-w-[75%] rounded-3xl px-4 sm:px-6 py-4 ${
                  msg.role === "user"
                    ? "bg-purple-600"
                    : "bg-[#171717] border border-[#262626]"
                }`}
              >

                <div className="flex items-center gap-2 mb-2">

                  {msg.role === "assistant" ? (
                    <FaRobot className="text-purple-400" />
                  ) : (
                    <FaUserCircle />
                  )}

                  <span className="text-sm font-medium">

                    {msg.role === "assistant"
                      ? "Chattrix"
                      : "You"}

                  </span>

                </div>

                <p className="leading-relaxed whitespace-pre-wrap text-[14px] sm:text-[15px]">
                  {msg.text}
                </p>

              </div>

            </div>

          ))}

          {/* Loading */}

          {loading && (

            <div className="flex justify-start">

              <div className="bg-[#171717] border border-[#262626] rounded-3xl px-6 py-4">

                <div className="flex gap-2">

                  <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"></div>

                  <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"></div>

                  <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"></div>

                </div>

              </div>

            </div>

          )}

          <div ref={messagesEndRef}></div>

        </div>

        {/* Input */}

        <div className="p-3 sm:p-5 lg:p-6">

          <div className="bg-[#171717] border border-[#292929] rounded-3xl px-4 py-3 flex items-center gap-3">

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message Chattrix..."
              className="flex-1 bg-transparent outline-none text-white placeholder:text-[#7B7B7B] text-[14px] sm:text-[15px]"
            />

            <button
              onClick={handleSend}
              className="bg-purple-600 hover:bg-purple-700 transition p-3 sm:p-4 rounded-2xl"
            >

              <FaPaperPlane />

            </button>

          </div>

        </div>

      </div>

    </div>

  )

}