import axios from "axios";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type userParams = {
  id: string;
};

export default function User() {
  const params = useParams<userParams>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch user data based on the 'id' from params
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);



  return (
    <div>
          <Typography variant="h4">{user?.email}</Typography>
          <Typography variant="h4">{user?.address.street}</Typography>
          <Typography variant="h4">{user?.address.suite}</Typography>
          <Typography variant="h4">{user?.address.city}</Typography>
          <Typography variant="h4">{user?.address.zipcode}</Typography>
          <Typography variant="h4">{user?.phone}</Typography>
          <Link to={`/users/tasks/${params.id}`}>
          <Button variant="outlined">
        Tasks
      </Button>  </Link>  </div>
  )
}
