const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const Product = require('../models/Product');

router.post('/products/:id/review', async (req, res) => {
  let {id} = req.params;
  let {rating,comment} = req.body;
  const product = await Product.findById(id);
  const review = new Review({rating,comment});
  product.reviews.push(review);
  await review.save();
  await product.save();
  res.redirect(`/products/${id}`);
});
router.delete('/products/:productId/review/:reviewId', async function(req, res) {
  const { productId, reviewId } = req.params;
  const product = await Product.findById(productId); // Find the product by ID
  const reviewIndex = product.reviews.findIndex(review => review._id.toString() === reviewId);
  if (reviewIndex > -1) {
      product.reviews.splice(reviewIndex, 1); // Remove the review from the array
      await product.save();  // Save the updated product
  }
  res.redirect(`/products/${productId}`);  // Redirect back to the product page
});
module.exports = router;