import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'components/Badge';
import { ImageProps, TeamMembers } from './TeamMembers';
import { ordinalNumConverter } from 'lib/ordinalNumConverter';
import { currencyFormatter } from 'lib/currencyFormatter';

type Props = {
  score: number;
  team: string;
  showDetail: boolean;
  members: Array<ImageProps>;
  total: number;
};

export const DonationHeader = ({ total, team, showDetail, score, members }: Props) => {
  const ordinalNumber = ordinalNumConverter(score);
  const formattedTotal = currencyFormatter(total);

  return (
    <>
      <Badge showDetail={showDetail} score={score} />
      <div className="flex w-full justify-between cursor-pointer">
        <div className="flex items-center w-full">
          <p
            className={cx(
              showDetail ? 'hidden' : 'block',
              'w-8 text-gray-500 font-semibold text-xs'
            )}
          >
            {ordinalNumber}
          </p>
          <p className="font-bold">{team}</p>
        </div>
        {/*Display total donated if accordion is collapsed.*/}
        {/*Display team member photos if accordion is expanded.*/}
        {showDetail ? (
          <TeamMembers members={members} />
        ) : (
          <div className="flex items-center">
            <p>{formattedTotal}</p>
            <FontAwesomeIcon
              className={cx(showDetail ? 'hidden' : 'block', 'ml-4 text-gray-400')}
              icon={faChevronRight}
            />
          </div>
        )}
      </div>
    </>
  );
};
