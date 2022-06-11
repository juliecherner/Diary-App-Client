import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Warning = ({
  inProgressLength,
  doneLength,
  deletedLength,
  postponedLength,
  totalLength,
}) => {
  const warningConstants = [
    {
      condition: Math.floor((inProgressLength / totalLength) * 100) > 50,
      alertImportance: "error",
      alertText:
        "Pay attention that more than 50% of your todos are not done, not postponed or not deleted",
    },
    {
      condition: Math.floor((doneLength / totalLength) * 100) < 50,
      alertImportance: "error",
      alertText: "Pay attention that less than 50% of your todos are done",
    },
    {
      condition: Math.floor((deletedLength / totalLength) * 100) > 30,
      alertImportance: "warning",
      alertText:
        "Warning: Pay attention that more than 30% of your todos are deleted. Maybe you delete too much or plan too much?",
    },
    {
      condition: Math.floor((postponedLength / totalLength) * 100) > 33.34,
      alertImportance: "warning",
      alertText:
        "Pay attention that you postponed more than third of your todos",
    },
  ];

  return (
    <Stack sx={{ width: "100%" }} spacing={1}>
      {warningConstants
        .filter((warning) => warning.condition === true)
        .map((warning) => (
          <Alert
            key={warning.alertText}
            variant="outlined"
            severity={warning.alertImportance}
          >
            Warning: {warning.alertText}
          </Alert>
        ))}
    </Stack>
  );
};

export default Warning;
