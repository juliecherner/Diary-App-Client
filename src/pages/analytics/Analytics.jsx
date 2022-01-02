const Analytics = ({ deleted, done, postponed }) => {
  //   const displayDone = () => {
  //     return done.map((doneItem, index) => <div key={index}>{doneItem}</div>);
  //   };

  //   const displayPostponed = ({ postponed }) => {
  //     return postponed.map((postponedItem, index) => (
  //       <div key={index}>{postponedItem}</div>
  //     ));
  //   };

  //   const displayDeleted = () => {
  //     return deleted.map((deletedItem, index) => (
  //       <div key={index}>{deletedItem}</div>
  //     ));
  //   };

  return (
    <div>
      <div>I'm analitika</div>
      <div>Done todos</div>
      {/* {displayDone()}
      <div>Postponed todos</div>
      {displayPostponed()}
      <div>Deleted todos</div>
      {displayDeleted()} */}
      {console.log("analytics deleted", deleted)}
      {console.log("analytics dooone", done)}
      {console.log("analytics potponed", postponed)}
    </div>
  );
};

export default Analytics;
