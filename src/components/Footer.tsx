import { motion, AnimatePresence } from 'motion/react';
import { Quote, RefreshCw } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const quotes = [
  { text: "The best thing about a boolean is even if you are wrong, you are only off by a bit.", author: "Anonymous" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "In software, the most beautiful code is the code that is not written.", author: "Anonymous" },
  { text: "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.", author: "Phil Karlton" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Truth can only be found in one place: the code.", author: "Robert C. Martin" },
  { text: "A user interface is like a joke. If you have to explain it, it's not that good.", author: "Martin LeBlanc" },
  { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
  { text: "You might not think that programmers are artists, but programming is an extremely creative profession.", author: "John Romero" },
  { text: "Testing leads to failure, and failure leads to understanding.", author: "Burt Rutan" },
  { text: "It's not a bug. It's an undocumented feature!", author: "Anonymous" },
  { text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
  { text: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V. Berard" },
  { text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" },
  { text: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "The most important property of a program is whether it accomplishes the intention of its user.", author: "C.A.R. Hoare" },
  { text: "The purpose of software engineering is to control complexity, not to create it.", author: "Pamela Zave" },
  { text: "Computer science is no more about computers than astronomy is about telescopes.", author: "Edsger W. Dijkstra" },
  { text: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.", author: "Edsger W. Dijkstra" },
  { text: "The function of good software is to make the complex appear simple.", author: "Grady Booch" },
  { text: "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.", author: "Eagleson's Law" },
  { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { text: "The sooner you start to code, the longer the program will take.", author: "Roy Carlson" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "The best programmers are not marginally better than merely good ones. They are an order of magnitude better.", author: "Randall E. Stross" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Software is like sex: it's better when it's free.", author: "Linus Torvalds" },
  { text: "I'm not a great programmer; I'm just a good programmer with great habits.", author: "Kent Beck" },
  { text: "A language that doesn't affect the way you think about programming is not worth knowing.", author: "Alan Perlis" },
  { text: "The computer was born to solve problems that did not exist before.", author: "Bill Gates" },
  { text: "I do not fear computers. I fear lack of them.", author: "Isaac Asimov" },
  { text: "If you think your users are idiots, only idiots will use it.", author: "Linus Torvalds" },
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { text: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.", author: "Dan Salomon" },
  { text: "The most damaging phrase in the language is: it's always been done that way.", author: "Grace Hopper" },
  { text: "A good programmer is someone who always looks both ways before crossing a one-way street.", author: "Doug Linder" },
  { text: "Don't comment bad code - rewrite it.", author: "Brian Kernighan" },
  { text: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan" },
  { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
  { text: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
  { text: "One of my most productive days was throwing away 1000 lines of code.", author: "Ken Thompson" },
  { text: "There are only two kinds of languages: the ones people complain about and the ones nobody uses.", author: "Bjarne Stroustrup" },
  { text: "If you think technology can solve your security problems, then you don't understand the problems and you don't understand the technology.", author: "Bruce Schneier" },
  { text: "Amateurs hack systems, professionals hack people.", author: "Bruce Schneier" },
  { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "It’s hardware that makes a machine fast. It’s software that makes a fast machine slow.", author: "Craig Bruce" },
  { text: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "Edsger W. Dijkstra" },
  { text: "Software being 'Done' is like lawn being 'Mowed'.", author: "Jim Benson" },
  { text: "The purpose of computing is insight, not numbers.", author: "Richard Hamming" },
  { text: "We can only see a short distance ahead, but we can see plenty there that needs to be done.", author: "Alan Turing" },
  { text: "I don't care if it works on your machine! We are not shipping your machine!", author: "Vidiu Platon" },
  { text: "To understand a program you must become both the machine and the program.", author: "Alan J. Perlis" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "The present is theirs; the future, for which I really worked, is mine.", author: "Nikola Tesla" },
  { text: "Somewhere, something incredible is waiting to be known.", author: "Carl Sagan" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Software is a great combination between artistry and engineering.", author: "Bill Gates" }
];

export const Footer = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());

  // Initialize quote on client side only to prevent hydration mismatch
  useEffect(() => {
    const initialIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuoteIndex(initialIndex);
    setUsedIndices(new Set([initialIndex]));
  }, []);

  const getNewQuote = useCallback(() => {
    let availableIndices = Array.from(Array(quotes.length).keys()).filter(i => !usedIndices.has(i));
    
    // Reset if we've shown most quotes (e.g. 80%)
    if (availableIndices.length < quotes.length * 0.2) {
      availableIndices = Array.from(Array(quotes.length).keys()).filter(i => i !== currentQuoteIndex);
      setUsedIndices(new Set([currentQuoteIndex]));
    }

    const nextIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    setCurrentQuoteIndex(nextIndex);
    
    setUsedIndices(prev => {
      const next = new Set(prev);
      next.add(nextIndex);
      return next;
    });
  }, [currentQuoteIndex, usedIndices]);

  const quote = quotes[currentQuoteIndex];

  return (
    <footer className="py-24 md:py-32 relative flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center px-4"
      >
        <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#64748B] mb-8 opacity-60" />
        
        <div className="min-h-[120px] md:min-h-[100px] flex flex-col items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-lg md:text-xl italic font-medium text-[#E2E8F0] leading-relaxed"
            >
              "{quote?.text}"
            </motion.p>
          </AnimatePresence>
        </div>
        
        <div className="h-[24px] mb-12">
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentQuoteIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-[#94A3B8] text-sm md:text-base"
            >
              {quote?.author}
            </motion.p>
          </AnimatePresence>
        </div>
        
        <div className="flex flex-col items-center gap-4 mb-20">
          <div className="text-[10px] tracking-[0.2em] font-mono text-[#64748B] uppercase opacity-70">
            Quote of the day
          </div>
          <button 
            onClick={getNewQuote}
            className="group relative p-2 rounded-full hover:bg-white/[0.03] transition-colors"
            aria-label="Show another quote"
          >
            <RefreshCw className="w-4 h-4 text-[#64748B] group-hover:text-[#F8FAFC] transition-colors group-hover:rotate-180 duration-500 ease-in-out" />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#161B22] border border-[#30363D] rounded text-[10px] font-medium text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Show another quote
            </span>
          </button>
        </div>
      </motion.div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center flex flex-col items-center gap-1">
        <p className="text-[#64748B] text-xs font-mono opacity-50">
          Designed & Built with ❤️ by Pavan Yadav
        </p>
        <p className="text-[#64748B] text-xs font-mono opacity-50">
          © 2026 Pavan Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
