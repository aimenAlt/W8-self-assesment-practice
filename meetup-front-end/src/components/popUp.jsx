import React from 'react';

const Popup = (props) => {
  const { edit, closePop, editorUpdater, idSelected } = props;
  return (
    <div >
      <div className='popup_inner'>
        <h1>Hi</h1>
        <form>
        <label> First Name:
          <input id="firstName" type="text" onChange={editorUpdater} defaultValue={idSelected.firstName} />
        </label>
        <label> Last Name:
          <input id="lastName" type="text" onChange={editorUpdater} defaultValue={idSelected.lastName}/>
        </label>
        <label> email
          <input id="email" type="text" onChange={editorUpdater} defaultValue={idSelected.email}/>
        </label>
        <label>
          Shirt Size:
          <br />
          <select id="shirt" onChange={editorUpdater} defaultValue={idSelected.shirt}> 
            <option value=""></option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
          <br />
        </label>
        <label>
          Experience Level: 
          <br />
          <select id="skillLevel" onChange={editorUpdater} defaultValue={idSelected.skillLevel}> 
            <option value=""></option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
          <br />
        </label>
      </form>

        <button onClick={edit}>save</button>
        <button onClick={closePop}>closePop</button>      
      </div>
    </div>
  );
}

export default Popup;

