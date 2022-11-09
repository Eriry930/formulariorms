import React from 'react'

const Message = ({msg,bgColor}) => {
  let styles = {
    padding: "1 rem",
    marginBottom: "1 rem",
    textAling: "center",
    color: "#ffffff",
    frontWeight: "blod",
    backgroundColor: bgColor,
  };

  return (
    <div style={styles}>
      <p>{msg}</p>
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
}

export default Message;