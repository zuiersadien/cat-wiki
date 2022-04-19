import React from "react";
import {
  DivSearch,
  FondoSearch,
  MostBreeds,
  TextFondoSearch,
  CarcatFour,
  MostBreedstext,
  DivInput,
} from "./styles.js";
import SvgCAT from "../../img/CatwikiLogo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { Formik } from "formik";


import { Link, useNavigate } from "react-router-dom";
const Search = ({ imag = [] }) => {
  //
 

  //
  // 
  const numero = imag.slice(0, 4);
  const navigate=useNavigate()
  // 
  console.log()

  return (
    <DivSearch>
      <FondoSearch>
        <TextFondoSearch>
          <img src={SvgCAT} alt="" />
          <h2>Get to know more about your cat breed</h2>
          <Formik
            initialValues={{
              departament: "",
            }}
            onSubmit={(values) => {
              if(values.departament===""){

              }else{
             

               const result=imag.filter(u=>
                  u.name===values.departament
               )
               console.log(result[0].id)
               navigate(`/catInfo?name=${values.departament}&id=${result[0].id}`)
              }
              

            }}
            
          >
            
            {({ handleSubmit, handleChange, values, handleBlur }) => (
              <DivInput onSubmit={handleSubmit}>
                <input
                  type="list"
                  id="departament"
                  name="departament"
                  placeholder="Name"
                  value={values.departament}
                  onChange={handleChange}
                  list="departaments"
                  onBlur={handleBlur}
                />
                  <button type="submit">
                  <BiSearchAlt2 />
                </button>
                <datalist id="departaments">
                  {imag.map((l, input) => (
                    <option key={input} value={l.name} />
                  ))}
                </datalist>
              
              </DivInput>
            )}
          </Formik>
        </TextFondoSearch>
      </FondoSearch>
      <MostBreeds>
        <h3>Most Searched Breeds</h3>
        <MostBreedstext>
          <h2>66+ Breeds For you to discover</h2>
          <Link to="/BestCats">SEE MORE</Link>
        </MostBreedstext>
        <CarcatFour>
          {numero.map((l, input) => (
            <div key={input}>
              <img src={l.image.url} alt="" />
              <h4>{l.name}</h4>
            </div>
          ))}
        </CarcatFour>
      </MostBreeds>
    </DivSearch>
  );
};

export default Search;
