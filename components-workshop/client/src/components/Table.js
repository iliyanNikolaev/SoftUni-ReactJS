import User from "./User";
import React from "react";
import { getUserById } from "../services/userService";
import UserDetails from './UserDetails';
import CreateUser from "./CreateUser";
import DeleteUser from "./DeleteUser";

const Table = ({
  users,
  onCreateSubmit,
  onDeleteSubmit,
  onUpdateSubmit,
  onUpdateClicked,
  onChangeUserProps,
  userProps,
  formErrors
}) => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [onCreateClicked, setOnCreateClicked] = React.useState(false);
  const [onDeleteClicked, setOnDeleteClicked] = React.useState(null);
  const [onEditClicked, setOnEditClicked] = React.useState(null);

  const onDetails = async (id) => {
    const user = await getUserById(id);
    setSelectedUser(user);
  }

  const onClose = () => {
    setSelectedUser(null);
    setOnCreateClicked(false);
    setOnDeleteClicked(null);
    setOnEditClicked(null);
  }

  const onCreateHandler = () => {
    setOnCreateClicked(true);
  }

  const onDeleteHandler = (id) => {
    setOnDeleteClicked(id);
  }
  
  const onDeleteSubmited = async (id) => {
    await onDeleteSubmit(id);
  }

  const onEditHandler = async (userId) => {
    const user = await getUserById(userId);
    onUpdateClicked(user);
    setOnEditClicked(user);
  }

  return (
    <>
      {selectedUser ? <UserDetails user={selectedUser} onClose={onClose} /> : null}
      {onCreateClicked 
      ? <CreateUser 
        onClose={onClose} 
        onCreateSubmit={onCreateSubmit}
        onChangeUserProps={onChangeUserProps}
        userProps={userProps}
        formErrors={formErrors} 
        /> 
      : null}
      {onDeleteClicked ? <DeleteUser onClose={onClose} onDeleteSubmited={() => onDeleteSubmited(onDeleteClicked)} /> : null}
      {onEditClicked 
      ? <CreateUser 
      onClose={onClose} 
      user={onEditClicked}
      onChangeUserProps={onChangeUserProps}
      userProps={userProps}
      formErrors={formErrors} 
      onCreateSubmit={(e) => onUpdateSubmit(e, onEditClicked._id)}/> 
      : null}
      
      <table className="table">
        <thead>
          <tr>
            <th>
              Image
            </th>
            <th>
              First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                data-icon="arrow-down" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                </path>
              </svg>
            </th>
            <th>
              Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                </path>
              </svg>
            </th>
            <th>
              Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                </path>
              </svg>
            </th>
            <th>
              Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                </path>
              </svg>
            </th>
            <th>
              Created
              <svg className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                data-icon="arrow-down" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path fill="currentColor"
                  d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                </path>
              </svg>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/*<!-- Table row component -->*/}
          {users.map(u => <User 
          key={u._id} 
          user={u} 
          onDetails={onDetails} 
          onDeleteHandler={onDeleteHandler} 
          onDeleteSubmit={onDeleteSubmit}
          onEditHandler={onEditHandler}
          />)}
        </tbody>
      </table>

      <button className="btn-add btn" onClick={() => onCreateHandler()}>Add new user</button>

    </>
  )
}

export default Table;