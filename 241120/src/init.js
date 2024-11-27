import "./db";
import "./models/video";
import "./models/user";
import app from "./server";

const PORT = 4001;

const handleListening = () =>
  console.log(`Server Listening on Port http://localhost:${PORT} ⏳`);

app.listen(PORT, handleListening);