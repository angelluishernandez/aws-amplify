import { Box } from "@mui/system";
import { Container, Grid, Paper, TextField } from "@mui/material";
export default function LoginForm() {
  return (
    <Grid container direction="column" justifyContent="center" rowSpacing={3}>
      <Grid item xs={8}>
        <TextField label="Username" fullWidth={true} />
      </Grid>
      <Grid item>
        <TextField label="Password" type="password" fullWidth />
      </Grid>
    </Grid>
  );
}
