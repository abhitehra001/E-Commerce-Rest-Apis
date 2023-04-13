const { getAllProducts, getAProduct, addProduct, updateProduct, deleteProduct } = require("../controllers/Product");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/:productId", getAProduct);
router.post("/", addProduct);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;