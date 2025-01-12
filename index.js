import express from "express";
import {
  inventoryPage,
  supplyDepotPage,
  packageProducts,
  planTransportsPage,
} from "./pages/index.js";
import {
  productsRouter,
  packagingsRouter,
  carriersRouter,
  packagedProductRouter,
  plannedTransportsRouter,
} from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app
  .use(express.json())
  .use(express.static(path.join(__dirname, "public")))
  .set("view engine", "pug")
  .set("views", path.join(__dirname, "views"));

// Routes
app
  .use("/products", productsRouter)
  .use("/packagings", packagingsRouter)
  .use("/carriers", carriersRouter)
  .use("/packaged-products", packagedProductRouter)
  .use("/planned-transports", plannedTransportsRouter);

// Pages
app
  .use("/", inventoryPage)
  .use("/supply-depot", supplyDepotPage)
  .use("/package-products", packageProducts)
  .use("/plan-transports", planTransportsPage);

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
