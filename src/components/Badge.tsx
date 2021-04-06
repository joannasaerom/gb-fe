import cx from 'classnames';

type Props = {
  score: number;
  showDetail: boolean;
};
export const Badge = ({ score, showDetail }: Props) => {
  return (
    <div
      className={cx(
        showDetail ? 'flex items-center justify-center' : 'hidden',
        'absolute -top-4 -left-4 bg-yellow-400 rounded-full h-8 w-8'
      )}
    >
      <p className="font-bold text-center text-white">{score}</p>
    </div>
  );
};
