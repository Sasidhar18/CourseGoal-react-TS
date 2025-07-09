import { useState } from "react";
import Header from "./Components/Header";
import GoalImg from "./assets/goals.jpg";
import CourseGoalList from "./Components/CourseGoalList";
import NewGoal from "./Components/NewGoal";

export type GoalProps = {
  title: string;
  description: string;
  id: number;
};

export type FormProps = { goal: string; summary: string };

export default function App() {
  const [goals, setGoals] = useState<GoalProps[]>([]);

  const addGoals = ({ goal, summary }: FormProps) => {
    setGoals((prevGoals) => {
      const newGoals: GoalProps = {
        id: Math.floor(Math.random() * 10000),
        description: goal,
        title: summary,
      };

      return [...prevGoals, newGoals];
    });
  };

  const deleteGoals = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: GoalImg, alt: "A list of goals" }}>
        Your Course Goals
      </Header>
      <NewGoal onAddGoal={addGoals} />
      <CourseGoalList goals={goals} onDeleteGoal={deleteGoals} />
    </main>
  );
}
