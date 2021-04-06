type Props = {
  total: number;
  goal: number;
};

export const Chart = ({ total, goal }: Props) => {
  const percentage = (total / goal) * 100;
  return (
    <div className="w-full rounded-full h-2 bg-gray-300">
      <div style={{ width: `${percentage}%` }} className="rounded-full h-2 bg-blue-600" />
    </div>
  );
};
