
import React, { useState } from 'react';
import { ChevronRight, Award, Sparkles, Target, Zap } from 'lucide-react';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    value: string;
  }>;
}

interface Result {
  type: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quel est votre objectif principal pour votre marque ?",
    options: [
      { text: "Me démarquer de la concurrence", value: "differentiation" },
      { text: "Construire ma crédibilité", value: "credibility" },
      { text: "Attirer plus de clients", value: "acquisition" },
      { text: "Moderniser mon image", value: "modernization" }
    ]
  },
  {
    id: 2,
    question: "Comment décririez-vous votre personnalité de marque ?",
    options: [
      { text: "Audacieuse et innovante", value: "bold" },
      { text: "Professionnelle et fiable", value: "professional" },
      { text: "Créative et inspirante", value: "creative" },
      { text: "Accessible et authentique", value: "authentic" }
    ]
  },
  {
    id: 3,
    question: "Quel est votre plus grand défi actuel ?",
    options: [
      { text: "Faire connaître mon expertise", value: "visibility" },
      { text: "Justifier mes prix", value: "value" },
      { text: "Attirer le bon public", value: "targeting" },
      { text: "Me positionner comme leader", value: "leadership" }
    ]
  }
];

const results: Record<string, Result> = {
  disruptor: {
    type: "disruptor",
    title: "Le Disrupteur",
    description: "Vous avez besoin d'un branding qui brise les codes et impose votre vision unique sur le marché.",
    icon: Zap,
    color: "from-orange-500 to-red-500"
  },
  authority: {
    type: "authority",
    title: "L'Autorité",
    description: "Votre branding doit établir votre expertise et renforcer votre crédibilité professionnelle.",
    icon: Award,
    color: "from-blue-500 to-cyan-500"
  },
  creator: {
    type: "creator",
    title: "Le Créateur",
    description: "Vous avez besoin d'un branding qui reflète votre créativité et inspire votre audience.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500"
  },
  connector: {
    type: "connector",
    title: "Le Connecteur",
    description: "Votre branding doit créer une connexion authentique et durable avec votre communauté.",
    icon: Target,
    color: "from-green-500 to-emerald-500"
  }
};

export const BrandingQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const { playClickSound, playSuccessSound } = useSoundEffects();

  const handleAnswer = (value: string) => {
    playClickSound();
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (userAnswers: string[]) => {
    const scores = {
      disruptor: 0,
      authority: 0,
      creator: 0,
      connector: 0
    };

    userAnswers.forEach(answer => {
      switch (answer) {
        case 'differentiation':
        case 'bold':
        case 'leadership':
          scores.disruptor++;
          break;
        case 'credibility':
        case 'professional':
        case 'value':
          scores.authority++;
          break;
        case 'modernization':
        case 'creative':
        case 'visibility':
          scores.creator++;
          break;
        case 'acquisition':
        case 'authentic':
        case 'targeting':
          scores.connector++;
          break;
      }
    });

    const topScore = Object.entries(scores).reduce((a, b) => scores[a[0]] > scores[b[0]] ? a : b);
    setResult(results[topScore[0]]);
    playSuccessSound();
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setIsStarted(false);
  };

  if (!isStarted) {
    return (
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-black mb-4">
            Quel type de branding vous correspond ?
          </h3>
          <p className="text-gray-600 mb-8">
            Découvrez en 3 questions quelle approche de branding correspond le mieux à vos objectifs.
          </p>
          <button
            onClick={() => {
              setIsStarted(true);
              playClickSound();
            }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Commencer le quiz
          </button>
        </div>
      </div>
    );
  }

  if (result) {
    const ResultIcon = result.icon;
    return (
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className={`w-20 h-20 bg-gradient-to-r ${result.color} rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse`}>
            <ResultIcon className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-black mb-2">
            {result.title}
          </h3>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {result.description}
          </p>
          <div className="space-y-4">
            <button
              onClick={() => {
                window.open('https://wa.me/33745010714?text=Bonjour%2C%20j\'ai%20fait%20le%20quiz%20et%20je%20suis%20' + result.type + '%20!%20J\'aimerais%20discuter%20de%20mon%20branding', '_blank');
                playClickSound();
              }}
              className={`w-full bg-gradient-to-r ${result.color} text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              Discuter de mon branding
            </button>
            <button
              onClick={resetQuiz}
              className="w-full text-gray-600 hover:text-black transition-colors"
            >
              Refaire le quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Question {currentQuestion + 1} sur {questions.length}</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <h3 className="text-2xl font-bold text-black mb-8 text-center">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="w-full text-left p-6 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-gray-800 group-hover:text-purple-700">
                  {option.text}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transform group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
