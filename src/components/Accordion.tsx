import { AccordionItem } from './AccordionItem';
import headshot from 'assets/headshot.jpg';

type Props = {};
export const Accordion = ({}: Props) => {
  const teams = [
    {
      score: 1,
      team: 'The Red Team',
      total: 40000,
      goal: 50000,
      members: [
        {
          src: headshot,
          alt: 'Team member headshot',
        },
        {
          src: headshot,
          alt: 'Team member headshot',
        },
        {
          src: headshot,
          alt: 'Team member headshot',
        },
      ],
    },
    {
      score: 2,
      team: 'The Orange Team',
      total: 25000,
      goal: 50000,
      members: [
        {
          src: headshot,
          alt: 'Team member headshot',
        },
      ],
    },
    {
      score: 3,
      team: 'The Yellow Team',
      total: 17240,
      goal: 50000,
      members: [
        {
          src: headshot,
          alt: 'Team member headshot',
        },
        {
          src: headshot,
          alt: 'Team member headshot',
        },
      ],
    },
    {
      score: 4,
      team: 'The Blue Team',
      total: 2000,
      goal: 50000,
      members: [
        {
          src: headshot,
          alt: 'Team member headshot',
        },
        {
          src: headshot,
          alt: 'Team member headshot',
        },
        {
          src: headshot,
          alt: 'Team member headshot',
        },
        {
          src: headshot,
          alt: 'Team member headshot',
        },
      ],
    },
  ];

  return (
    <div className="relative bg-blue-50 border border-solid rounded border-gray-300 max-w-sm">
      {teams.map((team, index) => {
        return (
          <AccordionItem
            score={team.score}
            team={team.team}
            total={team.total}
            goal={team.goal}
            members={team.members}
          />
        );
      })}
    </div>
  );
};
