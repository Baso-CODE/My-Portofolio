import { Link } from "react-router-dom";

const Project = ({ item }) => {
  return (
    <Link
      to={`/project/${item.id}`}
      key={item.id}
      className="flex flex-col items-center text-center group cursor-pointer">
      <div className="mb-8 relative overflow-hidden rounded-2xl">
        <img
          className="group-hover:scale-110 transition-all duration-500"
          src={item.image}
          alt={item.name}
        />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3 group-hover:text-accent transition-all text-white">
        {item.name}
      </h3>
    </Link>
  );
};

export default Project;
