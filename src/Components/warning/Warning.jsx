import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Warning = ({ total, todos, deleted, postponed, done }) => {
  const warningConstants = [
    {
      condition: Math.floor((todos.length / total) * 100) > 50,
      alertImportance: "error",
      alertText:
        "Pay attention that more than 50% of your todos are not done, not postponed or not deleted",
    },
    {
      condition: Math.floor((done.length / total) * 100) < 50,
      alertImportance: "error",
      alertText: "Pay attention that less than 50% of your todos are done",
    },
    {
      condition: Math.floor((deleted.length / total) * 100) > 30,
      alertImportance: "warning",
      alertText:
        "Warning: Pay attention that more than 30% of your todos are deleted. Maybe you delete too much or plan too much?",
    },
    {
      condition: Math.floor((postponed.length / total) * 100) > 33.34,
      alertImportance: "warning",
      alertText:
        "Pay attention that you postponed more than third of your todos",
    },
  ];

  return (
    <Stack sx={{ width: "100%" }} spacing={1}>
      {warningConstants.map((constantItem) => {
        if (constantItem.condition) {
          return (
            <Alert
              key={constantItem.alertText}
              variant="outlined"
              severity={constantItem.alertImportance}
            >
              Warning: {constantItem.alertText}
            </Alert>
          );
        }
      })}
    </Stack>
  );
};

export default Warning;
