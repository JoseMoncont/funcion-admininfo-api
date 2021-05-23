const { Router } = require("express");
const router = Router();

const admin = require("firebase-admin");
const db = admin.firestore();

// Create
router.post("/api/trabajadores", async (req, res) => {
  try {
    await db
      .collection("trabajadores")
      .doc("/" + req.body.id + "/")
      .create({ 
         nombre: req.body.nombre,
         apellidos: req.body.apellidos,
         doc_id: req.body.doc_id,
         sexo: req.body.sexo,
         celular: req.body.celular,
         fecha_nam: req.body.fecha_nam,
         cargo: req.body.cargo
        });
    return res.status(200).json();
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/api/trabajadores/:trabajador_id", (req, res) => {
  (async () => {
    try {
      const doc = db.collection("trabajadores").doc(req.params.trabajador_id);
      const item = await doc.get();
      const response = item.data();
      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
});

router.get("/api/trabajadores", async (req, res) => {
  try {
    let query = db.collection("trabajadores");
    const querySnapshot = await query.get();
    let docs = querySnapshot.docs;

    const response = docs.map((doc) => ({
      id: doc.id,
      nombre: doc.data().nombre,
      apellidos: doc.data().apellidos,
      doc_id: doc.data().doc_id,
      sexo: doc.data().sexo,
      celular: doc.data().celular,
      fecha_nam: doc.data().fecha_nam,
      cargo: doc.data().cargo
    }));

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.put("/api/trabajadores/:trabajador_id", async (req, res) => {
  try {
    const document = db.collection("trabajadores").doc(req.params.trabajador_id);
    await document.update({
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      doc_id: req.body.doc_id,
      sexo: req.body.sexo,
      celular: req.body.celular,
      fecha_nam: req.body.fecha_nam,
      cargo: req.body.cargo

    });
    return res.status(200).json({ message: "Trabajador actualizado correctamente" });
  } catch (error) {
    return res.status(500).json();
  }
});

router.delete("/api/trabajadores/:trabajador_id", async (req, res) => {
  try {
    const doc = db.collection("trabajadores").doc(req.params.trabajador_id);
    await doc.delete();
    return res.status(200).json({ message: "Trabajador eliminado correctamente" });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;