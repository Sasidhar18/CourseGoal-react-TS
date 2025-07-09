import CourseGoal from "./CourseGoal";
import { GoalProps } from "../App";

type CourseGoalProps = {
  goals: Array<GoalProps>;
  onDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            description={goal.description}
            onDeleteGoal={onDeleteGoal}
          />
        </li>
      ))}
    </ul>
  );
}
