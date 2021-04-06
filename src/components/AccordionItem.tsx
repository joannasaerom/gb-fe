import cx from 'classnames';
import { useState } from 'react';
import { Badge } from 'components/Badge';
import { AccordionItemDetail } from 'components/AccordionItemDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { currencyFormatter } from 'lib/currencyFormatter';
import { ordinalNumConverter } from 'lib/ordinalNumConverter';
import { ImageProps, TeamMembers } from './TeamMembers';

type Props = {
  score: number;
  team: string;
  total: number;
  goal: number;
  members: Array<ImageProps>;
};

export const AccordionItem = ({ members, score, team, total, goal }: Props) => {
  const [showDetail, setShowDetail] = useState(false);
  const ordinalNumber = ordinalNumConverter(score);
  const formattedTotal = currencyFormatter(total);

  return (
    <div
      onClick={() => setShowDetail(!showDetail)}
      className="relative p-4 border-t first:border-t-0 border-solid border-gray-300"
    >
      <Badge showDetail={showDetail} score={score} />
      <div
        className={cx(
          'flex w-full justify-between',
          showDetail ? 'cursor-default' : 'cursor-pointer'
        )}
      >
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
      <div
        className={cx(showDetail ? 'flex items-center justify-between flex-wrap mt-2' : 'hidden')}
      >
        <AccordionItemDetail total={total} goal={goal} />
      </div>
    </div>
  );
};
