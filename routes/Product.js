const router = require("express").Router();

const productController  = require("../controllers/productController");


    router.post("/", productController.productCreate);
    router.get("/", productController.productAll);
    router.get("/:productId", productController.productDetail);
    router.put("/:productId");
    router.delete("/:productId");

    module.exports = router;
