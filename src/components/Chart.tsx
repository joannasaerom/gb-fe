import cx from 'classnames';

type Props = {
  showDetail: boolean;
  total: number;
  goal: number;
};

export const Chart = ({ showDetail, total, goal }: Props) => {
  const percentage = (total / goal) * 100;
  return (
    <div className="w-full rounded-full h-2 bg-gray-300">
      <div style={showDetail ? { width: `${percentage}%` } : {}} className={cx(showDetail ? 'transition duration-500 ease-in-out ' : '', "w-0 rounded-full h-2 bg-blue-600")} />
    </div>
  );
};
