import { api } from "../api/api";
import { Formik, Form, Field } from 'formik';
import { useEffect, useState, useContext, cloneElement } from "react";
import NavbarDash from "../../components/NavbarDash";

export default function Teste(){

    return(
        <>
            <NavbarDash/>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                 <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                        <p className="mt-1 text-sm text-gray-600">
                            This information will be displayed publicly so be careful what you share.
                        </p>
                    </div>
                </div>    
          <div className="mt-5 md:mt-0 md:col-span-2"></div>
          <Formik
          initialValues={{foto: ''}}>
          <div className="rounded-md shadow-sm -space-y-px">
              <Field
              id="foto"
              name="foto"
              type="file"/>
              <button
              type="submit">
                  <span>Enviar</span>
              </button>
          </div>


          </Formik>

            </div>
        </>
    )
}