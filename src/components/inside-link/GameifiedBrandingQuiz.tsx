
import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Trophy, Zap, Sparkles, RefreshCw } from 'lucide-react';
import { TouchOptimized } from '../TouchOptimized';
import { AnimatedCard } from './AnimatedCard';
import { cn } from '@/lib/utils';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qu'est-ce qui définit le mieux l'identité de marque ?",
    options: [
      "Un logo et des couleurs",
      "L'ensemble des perceptions et émotions liées à une marque",
      "Le slogan de l'entreprise",
      "Les produits vendus"
    ],
    correctAnswer: 1,
    explanation: "L'identité de marque englobe tous les éléments qui créent une perception unique dans l'esprit des consommateurs.",
    difficulty: 'easy',
    category: 'Fondamentaux'
  },
  {
    id: 2,
    question: "Quelle est la première étape d'une stratégie de branding ?",
    options: [
      "Créer un logo",
      "Définir son positionnement",
      "Choisir les couleurs",
      "Créer un site web"
    ],
    correctAnswer: 1,
    explanation: "Le positionnement définit comment vous voulez être perçu par rapport à vos concurrents et guide toutes les autres décisions.",
    difficulty: 'medium',
    category: 'Stratégie'
  },
  {
    id: 3,
    question: "Qu'est-ce qui rend un personal branding efficace ?",
    options: [
      "Être présent sur tous les réseaux sociaux",
      "Avoir beaucoup d'abonnés",
      "Être authentique et cohérent",
      "Publier tous les jours"
    ],
    correctAnswer: 2,
    explanation: "L'authenticité et la cohérence créent la confiance et permettent de construire une marque personnelle solide.",
    difficulty: 'medium',
    category: 'Personal Branding'
  },
  {
    id: 4,
    question: "Combien de temps faut-il pour former une première impression ?",
    options: [
      "30 secondes",
      "7 secondes",
      "50 millisecondes",
      "2 minutes"
    ],
    correctAnswer: 2,
    explanation: "Il ne faut que 50 millisecondes pour qu'un visiteur se fasse une première impression de votre site web !",
    difficulty: 'hard',
    category: 'Psychologie'
  },
  {
    id: 5,
    question: "Quel élément n'est PAS essentiel dans une charte graphique ?",
    options: [
      "La palette de couleurs",
      "Les typographies",
      "Le nombre d'employés",
      "Les règles d'utilisation du logo"
    ],
    correctAnswer: 2,
    explanation: "Une charte graphique définit les éléments visuels de la marque, pas les aspects organisationnels de l'entreprise.",
    difficulty: 'easy',
    category: 'Design'
  }
];

export const GameifiedBrandingQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !showResult && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(-1); // Time's up
    }
  }, [timeLeft, showResult, quizCompleted]);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === quizQuestions[currentQuestion].correctAnswer;
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      setBestStreak(Math.max(bestStreak, streak + 1));
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setTimeLeft(30);
    setQuizCompleted(false);
    setStreak(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "🏆 Expert en branding !";
    if (percentage >= 60) return "🎯 Très bon niveau !";
    if (percentage >= 40) return "📚 Continuez à apprendre !";
    return "🚀 Il y a du potentiel !";
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'from-green-500 to-emerald-500';
      case 'medium': return 'from-yellow-500 to-orange-500';
      case 'hard': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  if (quizCompleted) {
    return (
      <AnimatedCard className="max-w-2xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200" glowEffect>
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-black mb-4">{getScoreMessage()}</h3>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">{score}/{quizQuestions.length}</div>
              <div className="text-sm text-gray-600">Score final</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">{Math.round((score / quizQuestions.length) * 100)}%</div>
              <div className="text-sm text-gray-600">Réussite</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">{bestStreak}</div>
              <div className="text-sm text-gray-600">Meilleure série</div>
            </div>
          </div>

          {/* Results breakdown */}
          <div className="space-y-3 mb-8">
            {quizQuestions.map((question, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                <span className="text-sm text-gray-700 flex-1 text-left">Q{index + 1}: {question.category}</span>
                <div className="flex items-center space-x-2">
                  <span className={cn(
                    "px-2 py-1 rounded text-xs font-medium",
                    question.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                    question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  )}>
                    {question.difficulty}
                  </span>
                  {answers[index] ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <TouchOptimized touchTarget="large">
              <button
                onClick={resetQuiz}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Recommencer le quiz</span>
              </button>
            </TouchOptimized>
            
            <p className="text-sm text-gray-600">
              Envie d'approfondir vos connaissances ? Contactez-nous pour une consultation personnalisée !
            </p>
          </div>
        </div>
      </AnimatedCard>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <AnimatedCard className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-2xl border border-gray-200" glowEffect>
      {/* Header with progress and stats */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1}/{quizQuestions.length}
          </div>
          <div className={cn(
            "px-3 py-1 rounded-full text-xs font-semibold text-white",
            `bg-gradient-to-r ${getDifficultyColor(question.difficulty)}`
          )}>
            {question.difficulty}
          </div>
          <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
            {question.category}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {streak > 0 && (
            <div className="flex items-center space-x-1 text-orange-500">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">{streak}</span>
            </div>
          )}
          <div className={cn(
            "flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold",
            timeLeft > 10 ? "bg-green-100 text-green-700" :
            timeLeft > 5 ? "bg-yellow-100 text-yellow-700" :
            "bg-red-100 text-red-700 animate-pulse"
          )}>
            <div className="w-2 h-2 rounded-full bg-current" />
            <span>{timeLeft}s</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-black mb-6 leading-relaxed">
          {question.question}
        </h3>

        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <TouchOptimized key={index} touchTarget="large">
              <button
                onClick={() => !showResult && handleAnswer(index)}
                disabled={showResult}
                className={cn(
                  "w-full p-4 text-left rounded-xl border-2 transition-all duration-300 transform",
                  showResult
                    ? index === question.correctAnswer
                      ? "border-green-500 bg-green-50 text-green-800"
                      : index === selectedAnswer
                        ? "border-red-500 bg-red-50 text-red-800"
                        : "border-gray-200 bg-gray-50 text-gray-600"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-105 active:scale-95",
                  !showResult && "cursor-pointer"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showResult && (
                    <div>
                      {index === question.correctAnswer && (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      )}
                      {index === selectedAnswer && index !== question.correctAnswer && (
                        <XCircle className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                  )}
                </div>
              </button>
            </TouchOptimized>
          ))}
        </div>
      </div>

      {/* Explanation and next button */}
      {showResult && (
        <div className="animate-fade-in">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border border-blue-100">
            <div className="flex items-start space-x-3">
              <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-black mb-2">Explication :</h4>
                <p className="text-gray-700 leading-relaxed">{question.explanation}</p>
              </div>
            </div>
          </div>

          <TouchOptimized touchTarget="large">
            <button
              onClick={nextQuestion}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              {currentQuestion < quizQuestions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
            </button>
          </TouchOptimized>
        </div>
      )}

      {/* Score display */}
      <div className="mt-6 text-center text-sm text-gray-600">
        Score actuel : {score}/{currentQuestion + (showResult ? 1 : 0)}
        {bestStreak > 1 && ` • Meilleure série : ${bestStreak}`}
      </div>
    </AnimatedCard>
  );
};
