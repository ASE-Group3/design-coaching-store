import UserAvatar from "../assets/user-avatar.svg";

const reviewsData = [
  {
    id: 1,
    body: "Lorem ipsum dolor sit amet consectetur. Massa massa nulla est lobortis egestas praesent ultricies proin. Varius egestas habitant dolor enim dui faucibus diam. Est rutrum nulla sit molestie facilisis.",
  },
  {
    id: 2,
    body: "Lorem ipsum dolor sit amet consectetur. Nibh tortor eget vestibulum pretium eget nisi ullamcorper. Curabitur arcu ornare vitae vitae libero magnis erat tellus. Tortor dui integer diam purus quam.",
  },
  {
    id: 3,
    body: "Lorem ipsum dolor sit amet consectetur. Donec aliquam quam eu sed nunc diam feugiat mi vehicula. Tempus purus tellus est risus congue. Amet tellus nec nam nibh. Arcu ullamcorper ut lacus.",
  },
  {
    id: 4,
    body: "Lorem ipsum dolor sit amet consectetur. Quam sem nec integer risus mauris eu. Facilisis eget rutrum consequat blandit eget. Mollis non cras sed in. Mi eu mauris in ultrices ullamcorper.",
  },
];

const ReviewCard = ({ body }) => {
  return (
    <div className="flex flex-col gap-5 bg-white bg-opacity-40 rounded-md p-5 mb-10">
      <img src={UserAvatar} alt="avatar" className="w-10 h-10" />
      <p className="max-w-md mt-1">{body}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="mt-20 flex flex-col items-center">
      <p className=" text-orange-500 w-fit font-extrabold text-2xl mb-5">
        Customer Reviews
      </p>

      <div className="px-10 flex gap-5 justify-between items-center">
        {reviewsData.map((data) => (
          <ReviewCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};
export default Reviews;
