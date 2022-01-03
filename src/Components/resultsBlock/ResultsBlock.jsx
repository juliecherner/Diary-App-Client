const ResultsBlock = ({ data, name, total }) => {
  const displayData = () => {
    return data.map((dataItem) => {
      return <div key={dataItem}>{dataItem}</div>;
    });
  };
  return (
    <div>
      <div>
        {name} : {data.length} from {total}
      </div>
      {displayData()}
    </div>
  );
};

export default ResultsBlock;
