import { Chart } from 'components/Chart';
import { currencyFormatter } from 'lib/currencyFormatter';

type Props = {
  showDetail: boolean;
  total: number;
  goal: number;
};

export const DonationDetail = ({ showDetail, total, goal }: Props) => {
  const formattedTotal = currencyFormatter(total);
  const formattedGoal = currencyFormatter(goal);
  return (
    <>
      <p className="text-blue-600 font-bold">{formattedTotal}</p>
      <p className="text-gray-500 font-bold text-xs"> raised of {formattedGoal} goal</p>
      <Chart showDetail={showDetail} total={total} goal={goal} />
    </>
  );
};
