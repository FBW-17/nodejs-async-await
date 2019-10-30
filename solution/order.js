

const createCustomer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Created customer in the database successfully"), 1000)
  })
}

const sendEmail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Sent order confirmation to customer email successfully"), 1000)
  })
}

const processPayment = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Processed customer payment successfully"), 1000)
  })
}

const reserveItemsInStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Reserved the product in stock succesfully"), 1000)
  })
}


const order = async () => {

  let result = ""
  result = await createCustomer()
  console.log(result)
  result = await sendEmail()
  console.log(result)
  result = await processPayment()
  console.log(result)
  result = await reserveItemsInStock()
  console.log(result)

}

order()