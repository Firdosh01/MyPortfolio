const express = require("express")
const app = express();
const dotenv = require("dotenv")
const databse = require("./config/database")
const cookieParser = require("cookie-parser");
const cors = require("cors")
const contactRoutes = require("./routes/Contact")

const PORT = process.env.PORT || 4000;
dotenv.config();

databse.connect()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api", contactRoutes);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});



// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});
