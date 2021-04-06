import cx from 'classnames';

export type ImageProps = {
  src: string;
  alt: string;
};
type Props = {
  members: Array<ImageProps>;
};

export const TeamMembers = ({ members }: Props) => {
  return (
    <div className="flex">
      {members.map((member, index) => {
        return (
          <img
            key={index}
            className={cx(
              'w-9 border-2 border-gray-300 rounded-full absolute',
              index !== 0 ? `right-${(index + 1) * 4}` : 'right-4'
            )}
            src={member.src}
            alt={member.alt}
          />
        );
      })}
    </div>
  );
};
