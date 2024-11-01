
const FormCheckout = ({ handleSubmitForm, dataForm, handleChangeInput }) => {
  return (
    <form onSubmit={handleSubmitForm} className="form">
      <h2>Datos Personales</h2>
      <div className="input">
        <label className="label" htmlFor="fullname">Nombre completo:</label>
        <input type="text" id="fullname" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} required />
      </div>
      <div className="input">
        <label className="label" htmlFor="phone">Telefono:</label>
        <input type="number" id="phone" name="phone" value={dataForm.phone} onChange={handleChangeInput} required />
      </div>
      <div className="input">
        <label className="label" htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={dataForm.email} onChange={handleChangeInput} required />
      </div>
      <div className="input">
        <label className="label" htmlFor="repeatEmail" >Repetir Email</label>
        <input type="email" name="repeatEmail" value={dataForm.repeatEmail} onChange={handleChangeInput} required />
      </div>
      <button type="submit" className="send-order">Realizar pedido!</button>
    </form>
  )
}

export default FormCheckout 