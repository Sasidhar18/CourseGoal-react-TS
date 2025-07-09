import { FormEvent, useRef } from "react";
import { FormProps } from "../App";

type NewGoalProps = {
  onAddGoal: ({ goal, summary }: FormProps) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const goal = titleRef.current!.value;
    const summary = summaryRef.current!.value;

    if (goal !== "" && summary !== "") {
      event.currentTarget.reset();
      onAddGoal({ goal: goal, summary: summary });
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </p>
      <p>
        <label htmlFor="description">description</label>
        <input type="text" id="description" ref={summaryRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
