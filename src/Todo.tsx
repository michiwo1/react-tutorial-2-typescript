type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed } = props;
  const completedMark = completed ? "[完了]" : "[未完了]";
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
};
