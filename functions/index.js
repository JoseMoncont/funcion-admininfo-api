const functions = require("firebase-functions");
const admin = require("firebase-admin");

const express = require("express");
const cors = require("cors");

const app = express();

const serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://funcion-adminifo.firebaseio.com",
});

app.use(cors({ origin: true }));

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Bienvenido!. Go to .../app/api/trabajadores" });
  });

// Routes
app.use(require("./routes/trabajadores.routes"));

exports.app = functions.https.onRequest(app);

