export default function Notes() {
    return (
      <div className="flex flex-col w-full py-2 pl-3 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-dark text-dark dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
        <div className="flex flex-col">
          <div className="text-white pl-2 mt-4">
            <div className="text-md text-blue-500">OpenAI API Key</div>
            <ul className="text-sm list-disc list-inside pr-2">
              <input 
                type="password" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-blue-500 dark:text-white" 
                placeholder="Enter your API key here" 
                onChange={(e) => {
                  localStorage.setItem("openai-api-key", e.target.value);
                }}
              />
            </ul>
          </div>
          <div className="text-white pl-2 mt-4">
            <div className="text-md text-red-500">Important!</div>
            <ul className="text-sm list-disc list-inside">
              <li>Nothing is saved</li>
              <li>Refresh to start new chat</li>
            </ul>
          </div>
          <div className="text-white pl-2 mt-4">
            <div className="text-md text-yellow-500">Model</div>
            <ul className="text-sm list-disc list-inside">
              <li>GPT4o</li>
            </ul>
          </div>
          <div className="text-white pl-2 mt-4">
            <div className="text-md text-green-500">
              <a href="https://github.com/abdibrokhim/ChatGPT4-Rust-Desktop-App" target="_blank" rel="noreferrer">Open Source</a>
            </div>
          </div>
          <div className="text-white pl-2 mt-4">
            <div className="text-md">Support me</div>
            <ul className="text-sm list-disc list-inside">
              <li>
                <a className="text-blue-400" href="https://buymeacoffee.com/abdibrokhim/" target="_blank" rel="noreferrer">BuyMeCoffe</a>
              </li>
              <li>
                <a className="text-blue-400" href="https://patreon.com/abdibrokhim/" target="_blank" rel="noreferrer">Patreon</a>
              </li>
            </ul>
          </div>
          <div className="text-white pl-2 mt-4">
            <div className="text-md">Let&apos;s connect!</div>
            <ul className="text-sm list-disc list-inside">
              <li>
                <a className="text-blue-400" href="https://linkedin.com/in/abdibrokhim/" target="_blank" rel="noreferrer">LinkedIn</a>
              </li>
              <li>
                <a className="text-blue-400" href="https://github.com/abdibrokhim/" target="_blank" rel="noreferrer">Github</a>
              </li>
              <li>
                <a className="text-blue-400" href="https://abdibrokhim/.vercel.app" target="_blank" rel="noreferrer">Website</a>
              </li>
            </ul>
          </div>
          <div className="text-white pl-2 mt-4">
            <div className="text-md">Business inquiries</div>
            <ul className="text-sm list-disc list-inside">
              <li>
                <a className="text-blue-400" href="mailto:abdibrokhim@gmail.com" target="_blank" rel="noreferrer">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};