import { Github, BookOpen, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <p className="text-xs text-gray-400">
          Copyright © All rights reserved.
        </p>
        
        <div className="flex items-center space-x-4">
          <a 
            href="#" 
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Medium"
          >
            <BookOpen size={16} />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={16} />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}