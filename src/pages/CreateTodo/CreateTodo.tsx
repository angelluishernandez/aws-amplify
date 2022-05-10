import { Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { API } from "aws-amplify";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SimpleButton from "../../components/SimpleButton/SimpleButton";
import { ErrorContext } from "../../context/ErrorContext";
import { TodoContext } from "../../context/TodoContext";
import { createTodo } from "../../graphql/mutations";

export default function AddTodo() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
  }>({ name: "", description: "" });
  const { onNewTodo } = useContext(TodoContext);
  const { onNewError } = useContext(ErrorContext);
  const navigate = useNavigate();

  async function onCreateTodo() {
    try {
      if (!formData.name && !formData.description) return;
      await onNewTodo(formData);
      navigate("/");
    } catch (error: any) {
      const errorText = error.errors[0].message;
      onNewError({ errorText });
    }
  }

  return (
    <React.Fragment>
      <Stack>
        <Box>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Introduce a name for your todo"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            fullWidth
          />
        </Box>
        <Box sx={{ m: 2 }} />
      </Stack>
      <Stack>
        <Box>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Introduce a description for your todo"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            fullWidth
          />
        </Box>
        <Box sx={{ m: 2 }} />
      </Stack>
      <SimpleButton
        buttonText="Save todo"
        variant="outlined"
        onClickCallback={onCreateTodo}
      />
    </React.Fragment>
  );
}
