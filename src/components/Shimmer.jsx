const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, idx) => (
          <div className="shimmer-card" key={idx}></div>
        ))}
    </div>
  );
};
export default Shimmer;
