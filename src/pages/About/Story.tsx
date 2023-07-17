export type StoryProps = {
  date: string;
  description: string;
  style?: React.CSSProperties;
};

export const Story: React.FC<StoryProps> = ({ date, description, style }) => (
  <div className="Timeline__content__story" style={style}>
    <h2 className="Timeline__content__story__date">{date}</h2>
    <p className="Timeline__content__story__desc">{description}</p>
  </div>
);