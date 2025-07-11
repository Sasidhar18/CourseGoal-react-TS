import CourseGoal from "./CourseGoal";
import { GoalProps } from "../App";
import InfoBox from "../InfoBox";

type CourseGoalProps = {
  goals: Array<GoalProps>;
  onDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalProps) {
  let info;

  if (goals?.length === 0) {
    info = (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  if (goals.length > 4) {
    const severity =
      goals.length > 10 ? "high" : goals.length > 6 ? "medium" : "low";
    info = (
      <InfoBox mode="warning" severity={severity}>
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {info}
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
    </>
  );
}
