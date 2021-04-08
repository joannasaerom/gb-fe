import cx from 'classnames';
import { useState } from 'react';
import { DonationDetail } from 'components/DonationDetail';
import { DonationHeader } from 'components/DonationHeader';
import { ImageProps } from './TeamMembers';

type Props = {
  score: number;
  team: string;
  total: number;
  goal: number;
  members: Array<ImageProps>;
  expanded: boolean;
};

export const AccordionItem = ({ expanded, members, score, team, total, goal }: Props) => {
  // State to control if detail section should be displayed or not
  const [showDetail, setShowDetail] = useState(expanded);
  const sectionId = `section-${score}`;
  return (
    <div
      role="button"
      aria-expanded={showDetail}
      aria-controls={sectionId}
      onClick={() => setShowDetail(!showDetail)}
      className="relative p-4 border-t first:border-t-0 border-solid border-gray-300"
    >
      {/*Donation header section*/}
      <DonationHeader
        total={total}
        team={team}
        score={score}
        members={members}
        showDetail={showDetail}
      />
      {/*Donation Detail section.*/}
      <div
        id={sectionId}
        className={cx(showDetail ? 'flex items-center justify-between flex-wrap mt-2' : 'hidden')}
      >
        <DonationDetail showDetail={showDetail} total={total} goal={goal} />
      </div>
    </div>
  );
};
