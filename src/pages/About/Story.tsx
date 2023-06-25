export type StoryProps = {
  date: string;
  description: string;
};

export const Story: React.FC<StoryProps> = ({ date, description }) => (
  <div className="Timeline__content__story">
    <h2 className="Timeline__content__story__date">{date}</h2>
    <p className="Timeline__content__story__desc">{description}</p>
  </div>
);