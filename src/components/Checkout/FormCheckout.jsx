
const FormCheckout = ({ handleSubmitForm, dataForm, handleChangeInput }) => {
  return (
    <form onSubmit={handleSubmitForm} >
        <label htmlFor="fullname">Nombre completo:</label>
        <input type="text" id="fullname" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

        <label htmlFor="phone">Telefono:</label>
        <input type="number" id="phone" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

        <button type="submit">Realizar pedido!</button>
    </form>
  )
}

export default FormCheckout 