import { Tween, Reveal } from 'react-gsap';

type Props = {
  showDetail: boolean;
  total: number;
  goal: number;
};

export const Chart = ({ showDetail, total, goal }: Props) => {
  const percentage = (total / goal) * 100;
  return (
    <div className="w-full rounded-full h-2 bg-gray-300">
      <Reveal repeat={true}>
        <Tween
          to={{
            width: `${percentage}%`,
            duration: 2,
            ease: 'power2.EaseOut',
          }}
        >
          <div className="w-0 rounded-full h-2 bg-blue-600" />
        </Tween>
      </Reveal>
    </div>
  );
};
