/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Brain, 
  Dna, 
  Stethoscope, 
  User, 
  ChevronRight, 
  Trophy, 
  RotateCcw, 
  CheckCircle2, 
  XCircle,
  Activity,
  Droplets,
  Zap,
  Shield,
  FileText,
  Clock,
  Target
} from 'lucide-react';
import { questions } from './data/questions.ts';

export default function App() {
  const [userName, setUserName] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const handleAnswer = (optionIndex: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === questions[currentQuestionIndex].correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setAnswers(prev => [...prev, isCorrect]);
    
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setAnswers([]);
    setIsStarted(false);
    setUserName('');
  };

  const getProgress = () => ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#020408] text-slate-100 font-sans selection:bg-red-500/30 flex flex-col">
      {/* Immersive Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
        {/* Stylized Grid */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 md:px-12 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center shadow-lg shadow-red-900/40">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Physiology Master Exam</h1>
          </div>
          <p className="text-slate-500 font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs">Academic Year 2024 • Module I</p>
        </div>
        <div className="hidden md:block text-right">
          <div className="text-[10px] text-slate-400 font-mono tracking-wider mb-1 uppercase">System Status</div>
          <div className="flex items-center justify-end gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm text-emerald-500 font-semibold tracking-wide uppercase">Online Secure</span>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 grid grid-cols-12 gap-8 px-6 md:px-12 py-8 md:py-12 items-center max-w-[1400px] mx-auto w-full">
        <AnimatePresence mode="wait">
          {!isStarted ? (
            <motion.div
              key="start-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              {/* Left Sidebar: Exam Brief */}
              <div className="col-span-1 md:col-span-4 space-y-6 hidden md:block">
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
                  <h3 className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Exam Structure
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-slate-400 text-sm">Total Questions</span>
                      <span className="text-white font-mono text-lg">70</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-slate-400 text-sm flex items-center gap-2"><Clock className="w-3 h-3" /> Minimum Time</span>
                      <span className="text-white font-mono text-lg">60m</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-slate-400 text-sm flex items-center gap-2"><Target className="w-3 h-3" /> Passing Score</span>
                      <span className="text-white font-mono text-lg">60%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-2xl p-6">
                  <h3 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">Modules Covered</h3>
                  <ul className="space-y-3 text-[11px] text-slate-300 font-medium">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Cellular Transport & pH</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Homeostasis & Feedback</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Nervous System Classification</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Autonomic Response (SNS/PNS)</li>
                  </ul>
                </div>
              </div>

              {/* Center: Registration Card */}
              <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none">
                     <Heart className="w-[400px] h-[400px] text-white" />
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-light mb-2">Welcome, <span className="font-bold text-white">Candidate</span></h2>
                    <p className="text-slate-400 mb-10 text-base md:text-lg">Please provide your credentials to begin the secure assessment session.</p>

                    <div className="space-y-6 max-w-lg">
                      <div className="relative group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">Full Name (Required)</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            placeholder="e.g. Assad Al-Din" 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-xl font-medium focus:outline-none focus:border-red-500/50 focus:ring-4 focus:ring-red-500/10 transition-all placeholder:text-slate-700"
                          />
                          <User className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-600" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Session ID</div>
                          <div className="text-white font-mono text-sm">PHY-2024-EX-{Math.floor(Math.random() * 9000 + 1000)}</div>
                        </div>
                        <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Attempt</div>
                          <div className="text-white font-mono text-sm leading-6 flex items-center gap-2">
                             <Shield className="w-3 h-3 text-emerald-500" /> 01 of 01
                          </div>
                        </div>
                      </div>

                      <button 
                        disabled={!userName.trim()}
                        onClick={() => setIsStarted(true)}
                        className="w-full bg-white text-black font-black py-5 rounded-xl text-xl hover:bg-neutral-200 transition-all shadow-2xl shadow-white/5 active:scale-[0.98] uppercase tracking-tighter disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      >
                        Start Examination
                      </button>
                    </div>

                    <p className="mt-8 text-xs text-slate-500 italic max-w-md">
                      By clicking start, you acknowledge that results will be displayed immediately upon submission of the 70th question.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : !showResult ? (
            <motion.div
              key="quiz-interface"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="col-span-12 max-w-4xl mx-auto w-full space-y-8"
            >
              {/* Progress Header */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-rose-500 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                      <Zap className="w-3 h-3 fill-rose-500" /> Live Assessment
                    </span>
                    <h2 className="text-2xl font-bold">Question {currentQuestionIndex + 1} <span className="text-slate-500 font-light">of {questions.length}</span></h2>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-mono font-black text-rose-500">{Math.round(getProgress())}%</span>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-rose-600 to-red-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${getProgress()}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                  <Activity className="w-48 h-48 rotate-12" />
                </div>
                
                <h3 className="text-xl md:text-3xl font-medium leading-[1.3] mb-12 max-w-3xl">
                  {questions[currentQuestionIndex].text}
                </h3>
                
                <div className="grid gap-4">
                  {questions[currentQuestionIndex].options.map((option, index) => {
                    const isSelected = selectedOption === index;
                    const isCorrect = index === questions[currentQuestionIndex].correctAnswer;
                    
                    return (
                      <button
                        key={index}
                        disabled={selectedOption !== null}
                        onClick={() => handleAnswer(index)}
                        className={`
                          group relative w-full text-left px-8 py-5 rounded-2xl border transition-all duration-300
                          ${selectedOption === null 
                            ? 'bg-white/5 border-white/10 hover:border-rose-500/50 hover:bg-white/10' 
                            : isCorrect 
                              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-100' 
                              : isSelected 
                                ? 'bg-red-500/20 border-red-500 text-red-100' 
                                : 'bg-white/5 border-white/5 opacity-30'}
                        `}
                      >
                        <div className="flex items-center gap-6">
                          <div className={`
                            w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold border-2
                            ${selectedOption === null 
                              ? 'bg-black/50 border-white/10 text-slate-500 group-hover:border-rose-500 group-hover:text-rose-500' 
                              : isCorrect 
                                ? 'bg-emerald-500 border-emerald-400 text-white' 
                                : isSelected 
                                  ? 'bg-red-500 border-red-400 text-white' 
                                  : 'bg-black/50 border-white/5 text-slate-700'}
                          `}>
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="flex-1 font-semibold text-lg">{option}</span>
                          
                          {selectedOption !== null && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-400" />}
                          {selectedOption !== null && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-400" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Overlay */}
                <AnimatePresence>
                  {selectedOption !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10"
                    >
                      <div className="flex gap-4">
                        <Stethoscope className="w-5 h-5 text-rose-500 shrink-0 mt-1" />
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">Clinical Note</span>
                          <p className="text-slate-300 italic text-sm md:text-base leading-relaxed">{questions[currentQuestionIndex].explanation}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result-pane"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="col-span-12 max-w-2xl mx-auto w-full bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 text-center shadow-3xl overflow-hidden relative"
            >
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-rose-500 to-blue-500" />
               
              <div className="mb-10 relative">
                <div className="w-24 h-24 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto border border-rose-500/30">
                  <Trophy className="w-12 h-12 text-rose-500" />
                </div>
                <div className="absolute -inset-4 bg-rose-500/10 blur-2xl rounded-full -z-10" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Assessment <span className="text-white">Complete</span></h2>
              <p className="text-slate-400 mb-12 text-lg">Examination report for <span className="text-white font-bold">{userName}</span></p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-black/40 p-8 rounded-3xl border border-white/5">
                  <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-600 mb-2">Final Score</p>
                  <p className="text-5xl font-mono font-black text-white">{score}<span className="text-2xl text-slate-700">/70</span></p>
                </div>
                <div className="bg-black/40 p-8 rounded-3xl border border-white/5">
                  <p className="text-[10px] uppercase font-black tracking-[0.3em] text-slate-600 mb-2">Efficiency</p>
                  <p className="text-5xl font-mono font-black text-rose-500">{Math.round((score / questions.length) * 100)}%</p>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl mb-12">
                 <p className="text-emerald-400 font-bold italic leading-relaxed">
                  {score / questions.length > 0.8 
                    ? "Exceptional performance. You've demonstrated advanced mastery of physiological principles." 
                    : score / questions.length > 0.6 
                      ? "Proficient assessment. Recommend focused review of Autonomic responses for full mastery." 
                      : "Knowledge gap detected. Review core modules and schedule a re-assessment session."}
                 </p>
              </div>
              
              <button
                onClick={resetQuiz}
                className="group w-full bg-white text-black font-black py-6 rounded-2xl text-xl flex items-center justify-center gap-3 transition-all hover:bg-neutral-200 active:scale-[0.98]"
              >
                <RotateCcw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" /> 
                New Assessment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 bg-black/40 backdrop-blur-md">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase">
          <div className="flex items-center gap-2"><span className="text-white/20">©</span> Faculty of Medicine</div>
          <div className="flex items-center gap-2"><span className="text-white/20">•</span> Physiology Department</div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col text-right">
            <span className="text-[9px] text-slate-600 font-mono">ENC_KEY</span>
            <span className="text-[10px] text-slate-500 font-mono">SHA-256-AES-DYNAMIC</span>
          </div>
          <div className="hidden md:block h-8 w-px bg-white/10"></div>
          <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-400">
            <Shield className="h-4 w-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
