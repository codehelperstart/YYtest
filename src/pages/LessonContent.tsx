import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { javascriptLessonsData } from '../data/javascriptLessonsData';
import { reactLessonsData } from '../data/reactLessonsData';
import { nodeLessonsData } from '../data/nodeLessonsData';
import { pythonLessonsData } from '../data/pythonLessonsData';
import { vueLessonsData } from '../data/vueLessonsData';
import { mysqlLessonsData } from '../data/mysqlLessonsData';
import { htmlLessonsData } from '../data/htmlLessonsData';
import { cssLessonsData } from '../data/cssLessonsData';

export interface KnowledgeCard {
  id: number;
  title: string;
  content: string;
  type: 'concept' | 'example' | 'practice';
  codeExample?: string;
}

export interface FillInBlank {
  id: number;
  question: string;
  answer: string;
  userAnswer?: string;
}

export interface Lesson {
  id: number;
  title: string;
  description?: string;
  knowledgeCards: KnowledgeCard[];
  fillInBlanks: FillInBlank[];
}

const LessonContent: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const [currentLessonId, setCurrentLessonId] = useState<number>(parseInt(lessonId || '1'));
  const [currentCard, setCurrentCard] = useState(0);
  const [fillInAnswers, setFillInAnswers] = useState<{ [key: number]: string }>({});
  
  // 根据courseId获取对应的课程数据
  const getCourseLessonsData = (courseId: string): Lesson[] => {
    switch (courseId) {
      case '1':
        return javascriptLessonsData;
      case '2':
        return reactLessonsData;
      case '3':
        return nodeLessonsData;
      case '4':
        return pythonLessonsData;
      case '5':
        return vueLessonsData;
      case '6':
        return mysqlLessonsData;
      case '7':
        return htmlLessonsData;
      case '8':
        return cssLessonsData;
      default:
        return javascriptLessonsData;
    }
  };
  
  // 获取当前课程的章节数据
  const lessonsData = getCourseLessonsData(courseId || '1');
  const currentLesson = lessonsData.find(lesson => lesson.id === currentLessonId) || lessonsData[0];
  const [fillInBlanks, setFillInBlanks] = useState<FillInBlank[]>(currentLesson.fillInBlanks);
  
  // 当章节改变时重置状态
  useEffect(() => {
    const lesson = lessonsData.find(lesson => lesson.id === currentLessonId) || lessonsData[0];
    setFillInBlanks(lesson.fillInBlanks.map(item => ({ ...item, userAnswer: '' })));
    setCurrentCard(0);
  }, [currentLessonId, courseId]);
  
  const handleFillInBlankChange = (id: number, value: string) => {
    setFillInBlanks(prev => 
      prev.map(item => 
        item.id === id ? { ...item, userAnswer: value } : item
      )
    );
  };
  
  const checkAnswer = (fillInBlank: FillInBlank) => {
    if (!fillInBlank.userAnswer) return false;
    const userAnswers = fillInBlank.userAnswer.split(',').map(s => s.trim());
    const correctAnswers = fillInBlank.answer.split(',').map(s => s.trim());
    return userAnswers.length === correctAnswers.length && 
           userAnswers.every((answer, index) => 
             answer.toLowerCase() === correctAnswers[index].toLowerCase()
           );
  };
  
  const renderFillInBlankQuestion = (question: string, answers: string[]) => {
    const parts = question.split('___');
    const result = [];
    
    for (let i = 0; i < parts.length; i++) {
      result.push(<span key={`text-${i}`}>{parts[i]}</span>);
      if (i < parts.length - 1) {
        result.push(
          <input
            key={`input-${i}`}
            type="text"
            className="mx-2 px-2 py-1 border border-gray-300 rounded text-center min-w-[100px]"
            placeholder="填入答案"
            value={answers[i] || ''}
            onChange={(e) => {
              const newAnswers = [...answers];
              newAnswers[i] = e.target.value;
              // 这里需要找到对应的题目ID并更新
              const questionIndex = fillInBlanks.findIndex(q => q.question === question);
              if (questionIndex !== -1) {
                handleFillInBlankChange(fillInBlanks[questionIndex].id, newAnswers.join(','));
              }
            }}
          />
        );
      }
    }
    return result;
  };
  
  const calculateProgress = () => {
    const totalCards = currentLesson.knowledgeCards.length;
    const totalQuestions = currentLesson.fillInBlanks.length;
    const answeredQuestions = fillInBlanks.filter(q => q.userAnswer && q.userAnswer.trim() !== '').length;
    
    const cardProgress = (currentCard + 1) / totalCards;
    const questionProgress = answeredQuestions / totalQuestions;
    
    return Math.round(((cardProgress + questionProgress) / 2) * 100);
  };
  
  const nextCard = () => {
    if (currentCard < currentLesson.knowledgeCards.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };
  
  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };
  
  const goToLesson = (lessonId: number) => {
    setCurrentLessonId(lessonId);
    navigate(`/course/${courseId}/lesson/${lessonId}`);
  };
  
  const goBack = () => {
    navigate(`/course/${courseId}`);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 头部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={goBack}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              返回课程
            </button>
            <div className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-800">{currentLesson.title}</h1>
            </div>
            <div className="text-sm text-gray-500">
              进度: {calculateProgress()}%
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 左侧章节导航 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">课程章节</h3>
              <div className="space-y-2">
                {lessonsData.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => goToLesson(lesson.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      lesson.id === currentLessonId
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="text-sm font-medium">{lesson.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* 主要内容区域 */}
          <div className="lg:col-span-3">
            {/* 知识点卡片 */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">知识点学习</h2>
                <div className="text-sm text-gray-500">
                  {currentCard + 1} / {currentLesson.knowledgeCards.length}
                </div>
              </div>
              
              {currentLesson.knowledgeCards.length > 0 && (
                <div className="mb-8">
                  <div className={`p-6 rounded-lg border-l-4 ${
                    currentLesson.knowledgeCards[currentCard].type === 'concept' ? 'border-blue-500 bg-blue-50' :
                    currentLesson.knowledgeCards[currentCard].type === 'example' ? 'border-green-500 bg-green-50' :
                    'border-purple-500 bg-purple-50'
                  }`}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      {currentLesson.knowledgeCards[currentCard].title}
                    </h3>
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {currentLesson.knowledgeCards[currentCard].content}
                    </div>
                  </div>
                </div>
              )}
              
              {/* 导航按钮 */}
              <div className="flex justify-between">
                <button
                  onClick={prevCard}
                  disabled={currentCard === 0}
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  上一个
                </button>
                <button
                  onClick={nextCard}
                  disabled={currentCard === currentLesson.knowledgeCards.length - 1}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  下一个
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            
            {/* 填空练习 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">填空练习</h2>
              
              <div className="space-y-6">
                {fillInBlanks.map((fillInBlank, index) => {
                  const userAnswers = fillInBlank.userAnswer ? fillInBlank.userAnswer.split(',').map(s => s.trim()) : [];
                  const isCorrect = checkAnswer(fillInBlank);
                  const hasAnswer = fillInBlank.userAnswer ? fillInBlank.userAnswer.trim() !== '' : false;
                  
                  return (
                    <div key={fillInBlank.id} className="p-6 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-medium text-gray-800 flex-1">
                          题目 {index + 1}
                        </h3>
                        {hasAnswer && (
                          <div className={`flex items-center ${
                            isCorrect ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {isCorrect ? (
                              <CheckCircle className="w-5 h-5 mr-1" />
                            ) : (
                              <XCircle className="w-5 h-5 mr-1" />
                            )}
                            {isCorrect ? '正确' : '错误'}
                          </div>
                        )}
                      </div>
                      
                      <div className="text-lg mb-4 text-gray-700">
                        {renderFillInBlankQuestion(fillInBlank.question, userAnswers)}
                      </div>
                      
                      {hasAnswer && !isCorrect && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
                          <p className="text-red-700 text-sm">
                            正确答案：{fillInBlank.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonContent;