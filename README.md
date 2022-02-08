# PharmaCare - An Online Pharma Store

Pesto Pharma team is proudly launching its own Online Pharma Store **PharmaCare**. The store will sell major pharma products like covid Essesntials, BodyCare, Vitamins & Supplements, Ayurveda Products.

# Product Requirements

### Design Screens
- [Figma Designs](https://www.figma.com/file/8zjk0I8uRBV5cPO5s3XKV7/pharma-care?node-id=0%3A1)

### Different parts/modules of the shop are. These are explained in detail later:

- [ ] Authentication
  - [ ] Signup
  - [ ] Login
  - [ ] Guest Login
  - [ ] Admin Login
- [ ] Homepage
- [ ] Category Page
- [ ] Product Page
- [ ] Cart Page
- [ ] Checkout Page
- [ ] Payment Page
- [ ] User Profile
  - [ ] Account Settings
  - [ ] Addresses
  - [ ] Past Orders
- [ ] Other Pages
  - [ ] About Us
  - [ ] Contact Us

### Authentication

If user visits homepage, show login/signup page

- #### Signup

  The user can signup using these methods:

  - **Email**

    _Fields:_ Name, Email, Password

  - **Phone**

    _Fields:_ Name, Phone Number, Password

- #### Login

  The user can login using email and password:

  - **Email**

    On successful authentication, login the user and save user token.

- #### Signup and Login Page elements

  ```
  [Input - Name (only on signup*)]
  [Input - Email ]
  [Input - Password]
  [Button - Login / Create Account]
  ```

    **_Notes_**

    1.If both the passwords match and pass validation, then login the user and take them to home page.

### Cart Flow

- #### Cart Page

  This page will be used before the payment page. It will list all the items that are added to the cart.

  For each product, give option to change product quantity. If the quantity is reduced to 0, then remove product from cart.

  Allow the user to enter coupon code. The coupon will be applied to total cart value. If valid, it will be applied to cart else show error message. If coupon is added, also allow to remove coupon.

  _Individual Product Elements:_ Product Image, Name, Current Price, Actual Price, Discount amount / percentage, any coupon applied and expected delivery date.

  _Cart Details:_ Total Actual Price, Discount, Delivery Charges, Total Calculated Amount.

  If user clicks on product name, image, take to the product page.

  Allow the user to discard all items in the cart.

  Finally, the user can choose to continue shopping or proceed to checkout.

  Allow the user to export cart items. When action is initiated, download file with cart items and their details. It can be imported by the user later.

  The user can generate a unique URL to the cart. This link can be used to complete the payment later or by someone else. If the cart items are changed, invalidate the URL.

- #### Checkout/Payment Page

  The page will contain the following parts:

  - #### Shipping Address

    By default select the primary shipping address. Give option to select secondary/other addresses added by user.

    Also allow user to enter a new address. If new address is added, ask customer if he/she wants to save it to profile.

  - #### Billing Address

    If payment mode requires billing address( eg. CC), then show billing address. It is not required for third party payment gateways.

    By default, it should be same as shipping address or if payment method is saved in profile, select the billing address associated with that payment method.

    There should be a option to add billing address if it is different from the shipping address.

  - #### Payment Method

    By default select the primary payment method if added.

    Give option to add new payment method.

    We will support Cash On Delivery. This will be displyed as a payment method. If selected, user can checkout without payment and pay later at delivery time.

    When the user submits payment, redirect based on payment status. If success, take to "Order Details Page" and send order email containing order and payment details. Else, redirect to checkout page and show the error message. The customer may wish to retry payment with another payment method or by changing other fields entered previously.

    We will allow user the option to choose from the different third party payment gateways that will be integrated.

    We may add payment logos (card company logos, third party payment gateways logos that are integrated) to increase customer trust and reduce cart abandonment.

### User Profile

**_We will not be supporting live order tracking. It may be supported later._**

- #### User Details Page

  It will contain user details:\_ Name, Email, Phone, Gender.

  The user can also update the above details.

  Also list all user profiles. A profile can also be set as default profile. The user can rename, delete a profile. If deleted, also remove all associated shipping addresses and payment methods.

  Also show all currencies supported and the option to set default currency.

  Also give the option to update password.

- #### Payment Methods Page

  It will contain list of all payment methods saved by the user. Give option to edit and remove the payment methods. The payment method needs to be attached to a profile.

  If user edits the payment method, _Show below payment method fields:_ Name, Card Number, Valid Month, Valid Year, Card Alias, Select Profile to attach the address to. _Show below address fields:_ Name, Pincode, Address(House No./Area/Street), City/District/Town, State, Country.

  If the payment method has an associated billing address, give option to add address.

- #### Orders Listing Page

  Show a list of all orders.

  Each order will list all products in order.

  _Order details to show_: Brief name of items, Total Price, Order Date, status (Order Placed, Delivered, Returned, Cancelled)

- #### Order Details Page

  If user comes to this page when new order was placed, then show a success message that your order has been placed.

  _Individual Product Details to show:_ Product Image, Name, Price, Latest status Update Date, status (Order Placed / Delivered / Returned / Cancelled)

  _Order Details to show:_ Total Actual Price, Delivery Charges, Total Calculated Amount, Discount, Order Date, Shipping address, Billing address, Payment Method used.

  Also show option to download PDF invoice.

  _PDF Invoice Details:_ Company Details, User Details, Total Actual Price, Delivery Charges, Total Calculated Amount, Discount, Order Date, Shipping address, Billing address, Payment Method used, Payment Date.

  Send email on order delivery of individual product with order details.