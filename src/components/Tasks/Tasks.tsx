import axios from "axios";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


interface Todo {
    userId: string;
    id: string;
    title: string;
    completed: boolean;
  }
  

type userParams = {
  id: string;
};

export default function User() {
  const params = useParams<userParams>();

  const [data, setData] = useState<Todo[]>([]);
  
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => {
        const todos:Todo[] = response.data
        setData(todos.filter((todo) => todo.userId == params.id)  );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);

  return (
    <div>
        {data.map((todo) => (
            <p key={todo.id}>{todo.title}</p>

        ))}

    </div>
  )
}

