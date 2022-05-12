import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
  CardActions,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorContext } from "../../context/ErrorContext";
import { TodoContext } from "../../context/TodoContext";
import { Todo } from "../../types/types";
import { Storage } from "aws-amplify";

export default function SingleTodo() {
  const { onNewError } = useContext(ErrorContext);
  const { onGetTodo, onUpdateTodo } = useContext(TodoContext);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
  const { id }: any = useParams();

  useEffect(() => {
    getCurrentTodo(id);
  }, [id]);

  const getCurrentTodo = async (id: string) => {
    try {
      const apiData = await onGetTodo(id);
      setCurrentTodo(apiData);
    } catch (error: any) {
      onNewError(error?.errors[0].message);
    }
  };

  const handleImageAdd = async (e: any) => {
    try {
      console.log(e.target);
      if (!e?.target?.files[0]) return;
      const image = e.target.files[0];
      const res = await Storage.put(image.name, image, {
        contentType: "image/png",
      });

      const imagesList = await Storage.list("photos/");
      console.log(imagesList);
      console.log(res);
    } catch (error: any) {
      onNewError(error?.errors[0].message);
    }
  };

  return (
    <React.Fragment>
      {!currentTodo ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Card>
          {currentTodo.image && (
            <CardMedia
              component="img"
              alt={currentTodo.name}
              height="140"
              image={currentTodo.image}
            ></CardMedia>
          )}

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {currentTodo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {currentTodo.description}
            </Typography>
          </CardContent>
          <CardActions>
            <label>
              <input
                type="file"
                onChange={handleImageAdd}
                style={{ display: "none" }}
                id="button-upload"
              />
              <Button variant="outlined" component="span">
                Upload
              </Button>
            </label>
          </CardActions>
        </Card>
      )}
    </React.Fragment>
  );
}
