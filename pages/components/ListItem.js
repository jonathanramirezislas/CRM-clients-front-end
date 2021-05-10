const ListItem = ({ downsized_medium: { url } }) => {
  return (
    <li className="my-2 mr-2 max-w-md w-auto h-auto list-none cursor-pointer">
      <img
        className="rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        src={url}
      ></img>
    </li>
  );
};

export default ListItem;
