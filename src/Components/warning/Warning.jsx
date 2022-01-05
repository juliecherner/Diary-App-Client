import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Warning = ({ total, todos, deleted, postponed, done }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={1}>
      {Math.floor((todos.length / total) * 100) > 50 && (
        <Alert variant="outlined" severity="error">
          Warning: Pay attention that more than 50% of your todos are not done,
          not postponed or not deleted
        </Alert>
      )}
      {Math.floor((deleted.length / total) * 100) > 30 && (
        <Alert variant="outlined" severity="warning">
          Warning: Pay attention that more than 30% of your todos are deleted.
          Maybe you delete too much or plan too much?
        </Alert>
      )}
      {Math.floor((done.length / total) * 100) < 50 && (
        <Alert variant="outlined" severity="error">
          Warning: Pay attention that less than 50% of your todos are done
        </Alert>
      )}
      {Math.floor((postponed.length / total) * 100) > 33.34 && (
        <Alert variant="outlined" severity="warning">
          Warning: Pay attention that you postponed more than third of your
          todos
        </Alert>
      )}
    </Stack>
  );
};

export default Warning;
