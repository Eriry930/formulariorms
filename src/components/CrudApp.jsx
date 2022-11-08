import React, { useContext }  from "react";
import CrudContext from "./context/CrudContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import Modals from "./Modals";


const CrudApp = () => {
  const { db, loading,error } = useContext(CrudContext);
  
    return (
    <div>
      <article className="grid-1-2">
        <Modals>
          <CrudForm />
          {loading && <Loader />}
          {error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText} `}
              bgColor="#dc3545"
            />
          )}
          
        </Modals>
        {db && (
          <CrudTable
          />
        )}

      </article>
      
    </div>
    );
        }
      


export default CrudApp;
