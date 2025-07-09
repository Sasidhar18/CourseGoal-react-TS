type CourseGoalProps = {
  title: string;
  description: string;
  id: number
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoal({ title, description, id, onDeleteGoal }: CourseGoalProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => onDeleteGoal(id)} >delete</button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, description, children }) => {
//   return (
//     <article>
//       <h2>{title}</h2>
//       <p>{description}</p>
//       {children}
//       <button>delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
