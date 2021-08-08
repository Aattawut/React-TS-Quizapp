// import { Difficulty, Question } from './API';
import { shuffleArray } from "./utils";
//styles

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
    console.log(data);
  return data.results.map((quesion: Question) => ({
    ...quesion,
    answers: shuffleArray([
        ...quesion.incorrect_answers, 
        quesion.correct_answer
    ]),
  }));
};
