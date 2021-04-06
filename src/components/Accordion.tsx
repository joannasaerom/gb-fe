import { AccordionItem } from './AccordionItem';
import { teams } from 'data/teamData';

export const Accordion = () => {

  return (
    <div className="relative bg-blue-50 border border-solid rounded border-gray-300 max-w-sm">
      {teams.map((team, index) => {
        return (
          <AccordionItem
            expanded={index === 0}
            key={index}
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
